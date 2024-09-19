import { IsString, isString, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}
