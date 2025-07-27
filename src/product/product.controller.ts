import { ProductService } from './product.service';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
      constructor(private readonly productService: ProductService) {}
      
        @Get()
        getHello(): string {
          return this.productService.getHello();
        }
}
