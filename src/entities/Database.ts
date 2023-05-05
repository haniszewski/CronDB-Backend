import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany} from "typeorm";
import { Backup } from "./Backup"
import { Schedule } from "./Schedule";
import { User } from "./User";

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

    @Column("varchar", {nullable: false})
    dialect: string;

    @OneToMany(() => Backup, (backup) => backup.database)
    backups: Backup[];

    @OneToMany(() => Schedule, (schedule) => schedule.database)
    schedules: Schedule[];

    @ManyToMany(() => User, (user) => user.databases)
    users: User[];
}