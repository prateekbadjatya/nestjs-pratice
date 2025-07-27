// user.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';


// Now in order to make patch user DTO as an extension of create user DTO, we would be using partial type.
// This is how you do it.
// Patch user DTO would extend the partial type.
// So let's extend partial type.
// And this partial type takes in an argument.
// The argument is create user DTO.
// What this does is that this takes all the properties of create user DTO maintains all the validation
// logic and makes all the properties of create user DTO as optional properties.


// This perfectly follows.
// Do not repeat yourself principle as well, because later if you add new properties to create user DTO,
// your patch user DTO will still work because it directly inherits all the properties from create user
// DTO.
export class PatchUserDto extends PartialType(CreateUserDto)  {
 
}

// "name":"John",
//   "lastName": "baby",
//   "city": "mumbai",
//   "email":"babyjohn@gmail.com"
