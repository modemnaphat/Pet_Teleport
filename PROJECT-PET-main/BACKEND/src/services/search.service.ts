import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreatePetDTO, UpdatePetDTO } from 'src/pet.dto';
import Pet from 'src/entitices/pet.entities';


@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  search(query: string): Promise<Pet[]> {
    return this.petRepository
      .createQueryBuilder('pet')
      .where('pet.name LIKE :query OR pet.species LIKE :query', { query: `%${query}%` })
      .getMany();
  }

  findAll(): Promise<Pet[]> {
    return this.petRepository.find();
}

  findOne(id: number): Promise<Pet | null> {
    return this.petRepository.findOne({ where: { id } });
}
  create(pet: CreatePetDTO): Promise<Pet | null> {
    return this.petRepository.save(pet);
  }

  update(updatePetDTO: UpdatePetDTO): Promise<Pet | null> {
    const { id, ...updateData } = updatePetDTO;
    return this.petRepository
      .update(id, updateData)
      .then(() => this.findOne(id));
  }

  async deleteById(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}
