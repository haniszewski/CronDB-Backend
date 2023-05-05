import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne} from "typeorm";
import { Storage } from "./Storage";
import { Database } from "./Database";

@Entity('backups')
export class Backup extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    source: string;

    @Column("timestamptz", {nullable: false})
    creationDate: Date;

    @Column("int", {nullable: false})
    size: number;

    @Column("varchar", {nullable: false})
    author: string;

    @ManyToMany(() => Storage, (storage) => storage.backups, {nullable: false})
    storages: Storage[];

    @ManyToOne(() => Database, (database) => database.backups)
    database: Database;
}