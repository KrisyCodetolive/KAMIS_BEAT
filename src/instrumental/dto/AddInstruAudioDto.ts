import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty } from 'class-validator';
import { AddInstruDto } from './AddInstruDto';
import { AddAudioFileDto } from './AddAudiofIleDto';


export class AddInstruAudioDto {
  @ValidateNested()
  @Type(() => AddInstruDto)
  @IsNotEmpty()
  instru: AddInstruDto;

  @ValidateNested()
  @Type(() => AddAudioFileDto)
  @IsNotEmpty()
  file: AddAudioFileDto[];
}