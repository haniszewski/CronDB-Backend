import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";

@Entity('databases')
export abstract class Database extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    dbName: string;

    @Column("varchar", {nullable: false})
    host: string;

    @Column("varchar", {nullable: false})
    user: string;

    @Column("varchar", {nullable: false})
    version: string;
}