import User from "./user.entities";
import { Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export default class Admin {
    @PrimaryColumn()
    id : number;
    
    @Column()
    username : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    phone : string;
   
}