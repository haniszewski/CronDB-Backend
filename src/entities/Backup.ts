import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne} from "typeorm";
import { Storage } from "./Storage";
import { Database } from "./Database";
import { User } from "./User";

@Entity("backups")
export class Backup extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    source: string;

    @Column("text", {nullable: false})
    creationDate: Date;

    @Column("int", {nullable: false})
    size: number;

    @ManyToOne(() => User, (author) => author.backups)
    author: User;

    @ManyToMany(() => Storage, (storage) => storage.backups, {nullable: false})
    storages: Storage[];

    @ManyToOne(() => Database, (database) => database.backups)
    database: Database;
}