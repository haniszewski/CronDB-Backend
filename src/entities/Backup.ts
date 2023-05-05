import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('storages')
export abstract class Storage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    source: string;

    @Column("timestamptz", {nullable: false})
    creationDate: Date;

    @Column("int", {nullable: false})
    size: number;

    @Column("varchar", {nullable: false})
    author: string;
}