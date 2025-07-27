import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductModule, UsersModule],
})
export class AppModule {}
