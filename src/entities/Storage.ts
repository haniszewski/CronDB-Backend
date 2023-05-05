import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Type } from "./Type";

@Entity('storages')
export class Storage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    status: string;

    @Column("varchar", {nullable: false})
    accessData: string;

    @Column("varchar", {nullable: false})
    type: Type;
}