import { Express } from 'express';

export type InstruFiles = {
  cover?: Express.Multer.File[];
  preview?: Express.Multer.File[];
  full?: Express.Multer.File[];
  project?: Express.Multer.File[];
};