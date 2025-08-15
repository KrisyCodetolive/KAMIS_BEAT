import { IsString, IsInt, IsUrl, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

enum FileType {
  MP3 = "MP3",
  ZIP = "ZIP"
}

export class AddAudioFileDto {
  
  @IsEnum(FileType)
  @IsNotEmpty()
  readonly type: FileType;


  @IsNotEmpty()
  readonly path: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

 
}
