import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurcaseorderDTO, UpdatePurchaseorderDTO } from 'src/pet.dto';
import PurchaseOrder from 'src/entitices/purcaseorder.entities';

@Injectable()
export class StatusService {
  getProductStatus(productId: string): string {
    // Your logic to fetch product status from database or external system
    // For example, return a hardcoded status for demonstration
    return 'In Transit';
  }
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