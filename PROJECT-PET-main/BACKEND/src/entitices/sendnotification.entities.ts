import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import User from "./user.entities";
import Admin from "./admin.entities";
import Pet from "./pet.entities";

@Entity()
export default class SendNotification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    date: Date;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Admin)
    admin: Admin;

    @ManyToOne(() => Pet)
    post: Pet;

}