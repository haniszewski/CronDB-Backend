import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}