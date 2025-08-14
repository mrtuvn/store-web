import { Controller, Get, Req } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    init2(): number {
        return 3;
    }

    @Get()
    initObject() {
        return {
            code: 200,
            message: 'success',
            data: {
                'name': 'product1 '
            }
        }
    }
    
    @Get()
    init(): string {
        return 'hello products controller';
    }


    @Get()
    getAllProducts(): string {
        return 'All products';
    }
}
