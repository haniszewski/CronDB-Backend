
import { ChildEntity, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Storage } from "./Storage";

@Entity("storages_ftp")
export class StorageFTP extends Storage{
    @OneToOne(() => Storage)
    @JoinColumn()
    storage: Storage;

    @Column("varchar", {nullable: false})
    ipAddr: string;

    @Column("smallint", {nullable: false})
    port: number;

    @Column("boolean", {nullable: false})
    passive: boolean;

}