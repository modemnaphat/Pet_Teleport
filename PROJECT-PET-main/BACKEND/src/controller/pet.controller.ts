import { Body,Controller, Get, Param,Post,Put, Req, Delete, Request} from "@nestjs/common";
import { PetService } from "src/services/pet.service";
import Pet from "src/entitices/pet.entities";
import { CreatePetDTO,UpdatePetDTO } from "src/pet.dto";
import { Role } from "src/auth/role.enum";
import { Roles } from "src/auth/roles.decorator";

@Controller('pet')
export class PetController {
    constructor(private readonly petService : PetService){

    }
   @Get()
   getIndex(@Req() request : Request ) : Promise<Pet[]> {
    return this.petService.findALL();
   }
   
    @Get(':id')
    getPetById(@Param('id') id : number) :Promise<Pet> {
       return this.petService.findOne(id)
    }
    @Post()
    postCreate(@Body() createPetDTO : CreatePetDTO): any{
      
      return this.petService.create(createPetDTO)
    }
  
    @Put(':id')
    updatePetById(@Param('id') id :number, @Body() updatePetDTO : UpdatePetDTO) : Promise<Pet> {
      return this.petService.update(updatePetDTO)
    }

    @Delete(":id")
    deletePetById(@Param('id') id : number) :string {
      this.petService.deleteById(id);
      return "OK"
    }

    @Roles(Role.Admin)
    @Post('onlyadmin')
    onlyAdminCreat(@Body() CreatePetDTO :CreatePetDTO ):Promise<Pet>{
      return this.petService.create(CreatePetDTO)
    }
  }