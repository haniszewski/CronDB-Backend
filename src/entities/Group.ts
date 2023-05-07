import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";

@Entity("groups")
export class Group extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    permissions: string;

    @ManyToMany(() => User, (user) => user.groups)
    @JoinTable()
    users: User[];
}