import { Injectable,NotFoundException,BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "src/entitices/user.entities";
import { CreateUserDTO, UpdateUserDTO } from "src/pet.dto";
import { validate } from "class-validator";
@Injectable()
export class UserService {
    getstatus() : string{
        return "OK";
    }
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) {

    }
 
     findALL(): Promise<User[]> {
        return this.UserRepository.find();
    }
 

    findOne(id : number): Promise<User | null> {
        return this.UserRepository.findOneBy({id:id});
    }

    async createWithId(id : number, createuserDTO : CreateUserDTO) : Promise<User> {
      const user = new User();
      user.id = id;
      user.first_name = createuserDTO.first_name;
        user.last_name = createuserDTO.last_name;
        user.username = createuserDTO.username;
        user.email = createuserDTO.email;
        user.password = createuserDTO.password;
        user.phone = createuserDTO.phone;
        user.address = createuserDTO.address;
        user.roles = createuserDTO.roles;
        return await this.UserRepository.save(user)

    }

     async create(user : CreateUserDTO) : Promise<User|null> {
        try{
            const errors = await validate(user);
            if(errors.length > 0 ){
              const errorMessage = errors.map(error => Object.values(error.constraints).join(', ')).join(', ');
              console.error('Validation failed:', errors);
              throw new Error(errorMessage);
            }
            else if(!isValidPassword(user.password) || !isValidPhone(user.phone)){
              throw new BadRequestException('Invalid password or phone format');
            }
            else{
              console.log('Validation successful');
            }
        return this.UserRepository.save(user);
    }

catch (error) {
  console.error('Error during user creation:', error);
  console.error('Password validation:', isValidPassword(user.password));
  console.error('Phone validation:', isValidPhone(user.phone));
  return null;
}
function isValidPassword(password: string): boolean {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
  if (!passwordRegex.test(password)) {
    return false;
  }
  return true;
}
function isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return false;
    }
    return true;
  }
 }
 
    async update(id: number, update : UpdateUserDTO) : Promise<User | null>{
        const usertoUpdate = await this.UserRepository.findOne({ where: { id: id } });
        if (!usertoUpdate) {
          throw new NotFoundException('User not found');
        }
        usertoUpdate.first_name = update.first_name;
        usertoUpdate.last_name = update.last_name;
        usertoUpdate.username = update.username;
        usertoUpdate.email = update.email;
        usertoUpdate.password = update.password;
        usertoUpdate.phone = update.phone;
        usertoUpdate.address = update.address;
        usertoUpdate.roles = update.roles;
        return await this.UserRepository.save(usertoUpdate);
      }
    async deleteById(id: number): Promise<void> {
        await this.UserRepository.delete(id);
}


}