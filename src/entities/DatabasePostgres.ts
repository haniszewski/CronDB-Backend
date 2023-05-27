import { ChildEntity, Column, OneToOne, JoinColumn, Entity } from "typeorm";
import { Database } from "./Database";

@Entity("databases_postgres")
export class DatabasePostgres extends Database{
    @OneToOne(() => Database)
    @JoinColumn()
    database: Database;

    @Column("varchar", {nullable: false})
    password: string;

    @Column("real", {nullable: false})
    version: number;
}