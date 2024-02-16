import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Pet from "src/entitices/pet.entities";
import { CreatePetDTO,UpdatePetDTO } from "src/pet.dto";
 
@Injectable()
export class PetService {
 
    constructor(
        @InjectRepository(Pet)
        private petRepository: Repository<Pet>,
    ) {

    }
 
     findALL(): Promise<Pet[]> {
        return this.petRepository.find();
    }
 

    findOne(id: number): Promise<Pet | null> {
        return this.petRepository.findOneBy({id:id});
    }
    
    
    create(pet : CreatePetDTO) : Promise<Pet|null> {
        return this.petRepository.save(pet);
    }
 
    update(updatePetDTO: UpdatePetDTO): Promise<Pet | null> {
        const { id, ...updateData } = updatePetDTO;
        return this.petRepository.update(id, updateData).then(() => this.findOne(id));
    }
    
    async deleteById(id: number): Promise<void> {
        await this.petRepository.delete(id);
    }
 
}