import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany, TableInheritance } from "typeorm";
import { Type } from "./Type";
import { Backup } from "./Backup";
import { BackupsStorages } from "./BackupsStorage";

@Entity("storages")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Storage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { nullable: true })
    status: string;

    @Column("varchar", { nullable: true })
    accessData: string;

    // @ManyToOne(() => Type, (type) => type, {nullable: false})
    // type: Type;

    @OneToMany(() => BackupsStorages, backupStorage => backupStorage.storage)
    backupStorage: BackupsStorages[];
}