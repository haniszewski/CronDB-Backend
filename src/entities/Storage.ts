import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany } from "typeorm";
import { Type } from "./Type";

@Entity('storages')
export abstract class Storage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    status: string;

    @Column("varchar", {nullable: false})
    accessData: string;

    @ManyToOne(() => Type, (type) => type.storages, {nullable: false})
    type: Type
}