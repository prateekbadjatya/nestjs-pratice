import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
      getUsers(id): string {
    return `Hello from users endpoint!  ${id}`;
  }
}
