import { FileType } from '@prisma/client';

export function fileType(type: string): FileType | undefined {
  if (type === 'mp3') return 'mp3';
  if (type === 'zip') return 'zip';
  return undefined; // pour les fichiers qui ne sont pas mp3 ou zip
}