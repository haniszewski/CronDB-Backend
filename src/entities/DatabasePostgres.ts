import { ChildEntity, Column, OneToOne, JoinColumn, Entity } from "typeorm";
import { Database } from "./Database";

@Entity("databases_postgres")
export class DatabasePostgres extends Database{
    @OneToOne(() => Database)
    @JoinColumn()
    database: Database;

    @Column("real", {nullable: false})
    version: number;
}