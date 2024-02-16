
import { Entity, Column,OneToMany} from "typeorm";
import PetBaseEntity from './Petbaseentity.entities';
import Pet from './pet.entities';


@Entity()
export default class User extends PetBaseEntity {

    @Column()
    username : string;

    @Column()
    password : string;

    @Column({nullable:true})
    email :  string;

    @Column()
    address : string;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column()
    phone : string;

    @Column({default : false})
    is_admin : boolean;

    @Column({ type: 'json', nullable: true })
    roles: string[];

    @OneToMany(()=>Pet,(pet)=>pet.owner)
    pets : []

}