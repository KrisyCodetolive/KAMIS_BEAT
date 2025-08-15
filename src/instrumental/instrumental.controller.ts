import { Body, Controller, Delete, Param, Post, Get, ParseIntPipe , UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddInstruDto } from './dto/AddInstruDto';
import { InstrumentalService } from './instrumental.service';
import {instruStorage} from './config/multer.config'
import * as fs from 'fs';
import { Express } from 'express';
//import { InstruFiles } from './utils/type';

export type InstruFiles = {
  cover?: Express.Multer.File[];
  preview?: Express.Multer.File[];
  full?: Express.Multer.File[];
  project?: Express.Multer.File[];
};

@Controller('instrumental')
export class InstrumentalController {

    constructor (private readonly InstrumentalService:InstrumentalService){}

    //getAll
    @Get("get-instru")
    GetAll(){
      return this.InstrumentalService.GetAll()
    }

    //delAll
    @Delete("del-instru")
     DelAll(){
      return this.InstrumentalService.DeleteAll()
    }

    //building 
@Post("add-instru")
@UseInterceptors(FileFieldsInterceptor([
  { name: 'cover', maxCount: 1 },
  { name: 'preview', maxCount: 1 },
  { name: 'full', maxCount: 1 },
  { name: 'project', maxCount: 1 },
], { storage: instruStorage }))
async AddInstru(
  @UploadedFiles() files: InstruFiles, 
  @Body() instrumental: AddInstruDto
) {
  try {
    // Tenter d’ajouter l’instru et les fichiers dans la base
    return await this.InstrumentalService.AddS(files, instrumental);
  } catch (err) {
    console.error("Erreur lors de l'ajout en base :", err);

    
    const allPaths = Object.values(files)
      .flat()
      .map(file => file.path);

    allPaths.forEach(p => {
      try { fs.rmSync(p, { force: true }); } catch(e) { console.error(e); }
    });

    throw err; 
  }}

    @Delete("del-instru/:id")
    DelInstru(@Param('id', ParseIntPipe) id: number){
        return this.InstrumentalService.DeleteS(id)
    }
    
}
