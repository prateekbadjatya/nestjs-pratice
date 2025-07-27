import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // To enable the whitelist option for a global ValidationPipe in NestJS, you need to configure it in your main.ts file. This setting ensures that any properties in the request body that are not explicitly defined with a decorator in your DTO (Data Transfer Object) will be automatically removed.
  // added new validation pipe globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
   // forbidNonWhitelisted:true // give error i property is not part dto 
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap(); 