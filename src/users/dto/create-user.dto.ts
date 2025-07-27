// user.dto.ts

import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

//https://www.npmjs.com/package/class-validator
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  name: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

// "name":"John",
//   "lastName": "baby",
//   "city": "mumbai",
//   "email":"babyjohn@gmail.com"
