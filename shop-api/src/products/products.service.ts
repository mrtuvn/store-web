import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
    getAllProducts() {
        return 'products service';
    }
}