import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { Database } from "./Database";
import { Group } from "./Group";
import { Backup } from "./Backup";

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

    @OneToMany(() => Backup, (backup) => backup.author)
    backups: Backup[];

    @ManyToMany(() => Database, (database) => database.users)
    @JoinTable()
    databases: Database[];

    @ManyToMany(() => Group, (group) => group.users)
    groups: Group[];
}