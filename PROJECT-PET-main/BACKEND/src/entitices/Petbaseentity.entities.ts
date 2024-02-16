import { Type } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import Pet from './pet.entities';

@Entity()
export default class PetBaseEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;
}