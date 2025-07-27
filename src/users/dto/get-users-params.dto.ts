import { IsInt, IsOptional } from "class-validator";
import {
    Type
} from 'class-transformer'
export class GetUserParamsDto{
    @IsOptional()
    @IsInt()
    @Type(()=> Number) // converting to number
    id?: number
}