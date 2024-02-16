import { Body,Controller,Get,Param,Post,Put,Req,Delete,Request} from "@nestjs/common";
import User from "src/entitices/user.entities";
import { CreateUserDTO,UpdateUserDTO } from "src/pet.dto";
import { UserService } from "src/services/user.service";
import { Role } from "src/auth/role.enum";
import { Roles } from "src/auth/roles.decorator";
@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){

    }
    @Get('status')
  getStatus() : string{
    return this.userService.getstatus();
  }
   @Get()
   getIndex(@Req() request : Request ) : Promise<User[]> {
    return this.userService.findALL();
   }
   
    @Get(':id')
    getUserById(@Param('id') id : number) :Promise<User> {
       return this.userService.findOne(id)
    }
    @Post()
    postCreate(@Body() createUserDTO : CreateUserDTO): Promise<User>{
      
      return this.userService.create(createUserDTO)
    }
  
    @Put(':id')
    updateUserById(@Param('id') id :number, @Body() updateUserDTO : UpdateUserDTO) : Promise<User> {
      return this.userService.update(id,updateUserDTO)
    }

    @Delete(":id")
    deleteUserById(@Param('id') id : number) :string {
      this.userService.deleteById(id);
      return "OK,So Good"
    }
    @Roles(Role.Admin, Role.User)
  @Get('bothUsers')
  bothRoles(){
    return 'Both User and Admin';
  }

  @Roles(Role.Admin)
  @Get('onlyadmin')
  onlyadmin(){
    return 'Only Admin';
  }

  @Roles(Role.User)
  @Get('onlyuser')
  onlyUser(){
    return 'Only User'
  }
}