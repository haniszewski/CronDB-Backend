import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Database } from "./Database";

@Entity('schedules')
export class Schedule extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    source: string;

    @Column("varchar", {nullable: false})
    cron: string;

    @Column("int", {nullable: false})
    numberOfCopy: number;

    @Column("varchar", {nullable: false})
    destination: string;

    @ManyToOne(() => Database, (database) => database.schedules)
    database: Database;
}