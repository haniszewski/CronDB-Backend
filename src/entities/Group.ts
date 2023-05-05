import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { User } from "./User";

@Entity('groups')
export class Group extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    permissions: string;

    @OneToMany(() => User, (user) => user.group)
    users: User[];
}