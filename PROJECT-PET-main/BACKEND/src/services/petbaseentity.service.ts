import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PetBaseEntity from "src/entitices/Petbaseentity.entities";
import { CreatePetBaseEntityDTO,UpdatePetBaseEntityDTO } from "src/pet.dto";

@Injectable()
export class PetBaseEntityService {
 
    constructor(
        @InjectRepository(PetBaseEntity)
        private petbaseentityRepository: Repository<PetBaseEntity>,
    ) {}
 
     findALL(): Promise<PetBaseEntity[]> {
        return this.petbaseentityRepository.find();
    }
 

    findOne(id : number): Promise<PetBaseEntity | null> {
        return this.petbaseentityRepository.findOneBy({id:id});
    }
    async create(Petbaseentity: CreatePetBaseEntityDTO): Promise<PetBaseEntity> {
        
            let pet = null; //await this.petrepository.findOne({id : purchaseorder.pet_id})
            let user = null; //awit this.petrepository.findOne({id : purchaseorder.pet_id})
            
            let po = this.petbaseentityRepository.create({
              id : 123
            })
            
            await po.save()
    
            return po
        }
        update(UpdatePetBaseEntityDTO: UpdatePetBaseEntityDTO): Promise<PetBaseEntity | null> {
            return 
        }
    
        async deleteById(id: number): Promise<void> {
            await this.petbaseentityRepository.delete(id);
        }
    
}