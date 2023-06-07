import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, TableInheritance} from "typeorm";
import { Backup } from "./Backup"
import { Schedule } from "./Schedule";
import { User } from "./User";

@Entity("databases")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Database extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    dbName: string;

    @Column("varchar", {nullable: false})
    host: string;

    @Column("smallint", {nullable: false})
    port: number;

    @Column("varchar", {nullable: false})
    user: string;

    @Column("varchar", {nullable: false})
    dialect: string;

    @OneToMany(() => Backup, (backup) => backup.database)
    backups: Backup[];

    @OneToMany(() => Schedule, (schedule) => schedule.database)
    schedules: Schedule[];

    // Users, who have permission to database
    @ManyToMany(() => User, (user) => user.databases)
    users: User[];
}