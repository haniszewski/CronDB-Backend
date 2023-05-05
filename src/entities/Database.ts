import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Backup } from "./Backup"
import { Schedule } from "./Schedule";

@Entity('databases')
export abstract class Database extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    dbName: string;

    @Column("varchar", {nullable: false})
    host: string;

    @Column("varchar", {nullable: false})
    user: string;

    @Column("varchar", {nullable: false})
    version: string;

    @OneToMany(() => Backup, (backup) => backup.database)
    backups: Backup[];

    @OneToMany(() => Schedule, (schedule) => schedule.database)
    schedules: Schedule[];
}