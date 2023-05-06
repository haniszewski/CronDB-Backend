import { ChildEntity, Column } from "typeorm";
import { Database } from "./Database";

@ChildEntity("JOINED")
export class DatabasePostgres extends Database{
    @Column("real", {nullable: false})
    version: number;
}