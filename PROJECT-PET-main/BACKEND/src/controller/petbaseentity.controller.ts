import { Body,Controller,Get,Param,Post,Put,Req,Delete,Request} from "@nestjs/common";
import  PetBaseEntity from "src/entitices/Petbaseentity.entities"
import { CreatePetBaseEntityDTO,UpdatePetBaseEntityDTO } from "src/pet.dto";
import { PetBaseEntityService } from "src/services/petbaseentity.service";

@Controller('petbaseentity')
export class PetBaseEntityController {
    constructor(private readonly petbaseentityService : PetBaseEntityService){

    }
   @Get()
   getIndex(@Req() request : Request ) : Promise<PetBaseEntity[]> {
    return this.petbaseentityService.findALL();
   }
   
    @Get(':id')
    getPetbaseentityById(@Param('id') id : number) :Promise<PetBaseEntity> {
       return this.petbaseentityService.findOne(id)
    }
    @Post()
    postCreate(@Body() createPetbaseentityDTO : CreatePetBaseEntityDTO): any{
      
      return this.petbaseentityService.create(createPetbaseentityDTO)
    }
  
    @Put(':id')
    updatePetbaseentityById(@Param('id') id :number, @Body() updatePetbaseentityDTO : UpdatePetBaseEntityDTO) : Promise<PetBaseEntity> {
      return this.petbaseentityService.update(updatePetbaseentityDTO)
    }

    @Delete(":id")
    deletePetbaseentityById(@Param('id') id : number) :string {
      this.petbaseentityService.deleteById(id);
      return "OK"
    }
  }