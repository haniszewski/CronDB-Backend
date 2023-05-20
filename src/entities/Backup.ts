import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import { Storage } from "./Storage";
import { Database } from "./Database";
import { User } from "./User";
import { BackupsStorages } from "./BackupsStorage";

@Entity("backups")
export class Backup extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    name: string;

    @Column("varchar", {nullable: false})
    source: string;

    @Column("int", {nullable: false})
    size: number;

    @ManyToOne(() => User, (author) => author.backups)
    author: User;

    @OneToMany(() => BackupsStorages, backupStorage => backupStorage.backup)
    backupStorage: BackupsStorages[];

    @ManyToOne(() => Database, (database) => database.backups)
    database: Database;
}