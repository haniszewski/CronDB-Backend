import { ChildEntity, Column, OneToOne, JoinColumn, Entity } from "typeorm";
import { Database } from "./Database";

@ChildEntity("databases_postgres")
export class DatabasePostgres extends Database{
    @Column("varchar", {nullable: false})
    password: string;

    @Column("real", {nullable: false})
    version: number;
}