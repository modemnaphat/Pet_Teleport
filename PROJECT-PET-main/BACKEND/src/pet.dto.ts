import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumberString, Length,Matches,IsAlphanumeric} from "class-validator";
import { Admin } from "typeorm";

export class CreatePetDTO {
    @IsNotEmpty()
    name :string;

    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    type : string;

    @IsNotEmpty()
    ownerId : number;

    @IsNotEmpty()
    status : string;

}
export class UpdatePetDTO {
    
    @IsNotEmpty()
    id : number;

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    color : string;

    //optionsl
    description? : string;
}

export class CreatePurcaseorderDTO {
    
    @IsNotEmpty()
    @IsString()
    user_id : number;

    @IsNotEmpty()
    pet_id : number;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;
}

export class UpdatePurchaseorderDTO {
    @IsNotEmpty()
    @IsString()
    purchase_user : string;

    @IsNotEmpty()
    pet : string;

    @IsNotEmpty()
    is_paid : string;

    @IsNotEmpty()
    delivery_address : string;   
}
export class UpdatePetBaseEntityDTO {
    @IsNotEmpty()
    @IsString()
    id : number;
}
export class CreatePetBaseEntityDTO{
    @IsNotEmpty()
    @IsString()
    id : string; 
}
export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];

    @IsNotEmpty()
    is_admin : boolean;
}
export class UpdateUserDTO{
    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    address : string;

    @IsNotEmpty()
    first_name : string;   

    @IsNotEmpty()
    last_name : string;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    @IsString()
    roles: string[];

}

export class CreateAdminDTO{

    @IsNotEmpty()
    @IsAlphanumeric()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
    password: string;
  
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
    phone: string;

    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    Email : string;   

    @IsNotEmpty()
    @IsString()
    roles: string[];
} 

export class UpdateAdminDTO{
   
    @IsNotEmpty()
    @IsAlphanumeric()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, { message: 'Password must contain at least one digit, one lowercase, and one uppercase letter.' })
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
    password: string;
  
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: 'Phone number must be exactly 10 digits.' })
    phone: string;

    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    Email : string;   

    @IsNotEmpty()
    @IsString()
    roles: string[];
} 

export default class CreateSendNotification{
    @IsNotEmpty()
    @IsString()
    title:string;
    
    
}

export class CreateSendNotificationDto {
    @IsNotEmpty()
    @IsString()
    user: string; 

}
