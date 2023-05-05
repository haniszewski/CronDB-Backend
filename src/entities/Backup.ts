import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany} from "typeorm";
import { Storage } from "./Storage";

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
}