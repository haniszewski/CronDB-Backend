
import { ChildEntity, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Storage } from "./Storage";

@ChildEntity("storages_ftp")
export class StorageFtp extends Storage{
    @Column("varchar", {nullable: false})
    ipAddr: string;

    @Column("smallint", {nullable: false})
    port: number;

    @Column("varchar", {nullable: false})
    ftpUser: string;

    @Column("varchar", {nullable: false})
    ftpPass: string;

    @Column("boolean", {nullable: false})
    passive: boolean;

}