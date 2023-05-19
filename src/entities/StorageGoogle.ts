import { ChildEntity, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Storage } from "./Storage";

@Entity("storages_google")
export class StorageStorage extends Storage{
    @OneToOne(() => Storage)
    @JoinColumn()
    storage: Storage;

    @Column("varchar", {nullable: false})
    tokenName: string;
}