import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Database } from "./Database";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    login: string;

    @Column("varchar", {nullable: false})
    password: string;

    @Column("varchar", {nullable: false})
    email: string;

    @Column("varchar", {nullable: false})
    phoneNumber: string;

    @Column("varchar", {nullable: false})
    accountActive: boolean;

    @ManyToMany(() => Database, (database) => database.users)
    @JoinTable()
    databases: Database[];
}