import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import User from 'src/entitices/user.entities';
import PetBaseEntity from './Petbaseentity.entities';


@Entity()
export default class Pet extends PetBaseEntity {

    @Column()
    name : string;

    @Column()
    price : number;

    @Column()
    type : string;

    @ManyToOne(() => User, (user)=>user.pets)
    owner : User;

    @Column()
    status : string
}
