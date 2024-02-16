import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Controller, Get, Param,Post,Put,Req,Delete,Request } from '@nestjs/common';
import { StatusService } from 'src/services/status.service';
import PurchaseOrder from 'src/entitices/purcaseorder.entities';
import { CreatePurcaseorderDTO,UpdatePurchaseorderDTO } from 'src/pet.dto';

@Controller('product')
export class StatusController {
  constructor(private readonly productStatusService: StatusService) {}

  @Get(':id/status')
  getProductStatus(@Param('id') productId: string): string {
    return this.productStatusService.getProductStatus(productId);
  }
} 
@Injectable()
export class PurchaseorderService {

    constructor(
        @InjectRepository(PurchaseOrder)
        private purchaseorderRepository: Repository<PurchaseOrder>,
    ) {

    }

    findALL(): Promise<PurchaseOrder[]> {
        return this.purchaseorderRepository.find();
    }


    findOne(id: number): Promise<PurchaseOrder | null> {
        return this.purchaseorderRepository.findOneBy({ id: id });
    }

    async create(purchaseorder: CreatePurcaseorderDTO): Promise<PurchaseOrder> {
        
        let pet = null; //await this.petrepository.findOne({id : purchaseorder.pet_id})
        let user = null; //awit this.petrepository.findOne({id : purchaseorder.pet_id})
        
        let po = this.purchaseorderRepository.create({
            date : new Date(),
            pet : pet,
            purchase_user : user,
            is_paid : false,
            delivery_address : purchaseorder.delivery_address

        })
        
        await po.save()

        return po
    }

    update(updatePurchaseorderDTO: UpdatePurchaseorderDTO): Promise<PurchaseOrder | null> {
        return 
    }

    async deleteById(id: number): Promise<void> {
        await this.purchaseorderRepository.delete(id);
    }


}
