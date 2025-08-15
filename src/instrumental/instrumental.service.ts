import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service/prisma-service.service';
import { AddInstruDto } from './dto/AddInstruDto';
import { InstruFiles } from './utils/type';
import * as path from 'path';
import { instanceToPlain } from 'class-transformer';

import { fileType } from './utils/fileType';
import { delFile } from './utils/delFile';

@Injectable()
export class InstrumentalService {
  constructor(private prisma: PrismaService) {}

  //building sercives
  async AddS(files: InstruFiles, instrumental: AddInstruDto) {
    const descr = await this.prisma.instrumental.create({
      data: {
        title: instrumental.title,
        bpm: instrumental.bpm,
        gamme: instrumental.gamme,
        directory:files.cover![0]!.destination,
        cover: files.cover?.[0]?.path,
      },
    });
    console.log(files.cover![0]!.destination)
    console.log(files);

    for (const key in files) {
      if (key === 'cover') continue;
      const fileArray = files[key];

      if (fileArray && fileArray.length > 0) {
        const file = fileArray[0];

        const extString = path
          .extname(file.originalname)
          .replace('.', '')
          .toLowerCase();
        const ext = fileType(extString);
        if (!ext) continue;

        await this.prisma.audioFile.create({
          data: {
            type: ext,
            path: file.path,
            price: instrumental.prices[key],
            instrumentalId: descr.instruId,
          },
        });
      }
    }

    return { message: 'instru bien ajouté', instr: descr };
  }

  //target services
  async DeleteS(id: number) {

    const directoryPath = (await this.prisma.instrumental.findFirst({
    where: { instruId: id },
    select: { directory: true }
    }))?.directory;

    //delete directory
    delFile([directoryPath!])

    return this.prisma.instrumental.delete({ where: { instruId: id } });
  }

  //operating all service
GetAll() {
  return this.prisma.instrumental.findMany({
   orderBy: {
      instruId: 'desc',
    },
  });
}

async DeleteAll() {
  // Récupérer tous les dossiers
  const directories = await this.prisma.instrumental.findMany({
    select: { directory: true }
  });

  // Extraire les chemins
  const paths = directories.map(d => d.directory);

  // Supprimer tous les dossiers
  delFile(paths);

  // Supprimer toutes les entrées en base
  return this.prisma.instrumental.deleteMany();
}

}
