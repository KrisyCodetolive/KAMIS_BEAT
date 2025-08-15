import { IsString, IsInt, IsUrl, IsNotEmpty } from 'class-validator';

export class AddInstruDto{

    @IsString()
    @IsNotEmpty()
    readonly title:string

     @IsString()
    @IsNotEmpty()
    readonly bpm:string

    @IsString()
    @IsNotEmpty()
    readonly gamme:string

    @IsString()
    @IsNotEmpty()
    readonly prices:string
}