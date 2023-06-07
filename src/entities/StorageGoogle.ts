import { ChildEntity, Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Storage } from "./Storage";

@ChildEntity("storages_google")
export class StorageStorage extends Storage{

    @Column("varchar", {nullable: false})
    tokenName: string;
}