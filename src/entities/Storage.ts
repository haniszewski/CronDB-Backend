import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Type } from "./Type";
import { Backup } from "./Backup";
import { BackupsStorages } from "./BackupsStorage";

@Entity("storages")
export abstract class Storage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    status: string;

    @Column("varchar", {nullable: false})
    accessData: string;

    @ManyToOne(() => Type, (type) => type, {nullable: false})
    type: Type;

    @OneToMany(() => BackupsStorages, backupStorage => backupStorage.storage)
    backupStorage: BackupsStorages[];
}