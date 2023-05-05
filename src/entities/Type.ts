import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('types')
export class Type extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;
}