import { Controller, Get, Query, Post, Put, Delete, Req, Param, Body } from '@nestjs/common';
import { SearchService } from 'src/services/search.service';
import Pet from 'src/entitices/pet.entities';
import { CreatePetDTO, UpdatePetDTO } from 'src/pet.dto';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  search(@Query('query') query: string): Promise<any[]> {
    return this.searchService.search(query);
  }

  @Get('index')
  getIndex(): Promise<Pet[]> {
    return this.searchService.findAll();
  }
  
  
   
  @Get(':id')
  getPetById(@Param('id') id: number): Promise<Pet> {
    return this.searchService.findOne(id);
  }

  @Post()
  postCreate(@Body() createPetDTO: CreatePetDTO): any {
    return this.searchService.create(createPetDTO);
  }
  
  @Put(':id')
updatePetById(@Param('id') id: number, @Body() updatePetDTO: UpdatePetDTO): Promise<Pet> {
  return this.searchService.update(updatePetDTO);
}


  @Delete(':id')
  deletePetById(@Param('id') id: number): string {
    this.searchService.deleteById(id);
    return "OK";
  }

  @Roles(Role.Admin)
  @Post('onlyadmin')
  onlyAdminCreat(@Body() createPetDTO: CreatePetDTO): Promise<Pet> {
    return this.searchService.create(createPetDTO);
  }
}
