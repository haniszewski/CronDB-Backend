import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Storage } from "./Storage";

@Entity('types')
export class Type extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @OneToMany(() => Storage, (storage) => storage.type)
    storages: Storage[];
}