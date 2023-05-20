import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import { Storage } from "./Storage";
import { Backup } from "./Backup";


@Entity("backups_storages")
export abstract class BackupsStorages extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", {nullable: false})
    creationDate: Date;

    @ManyToOne(() => Backup,backup => backup.backupStorage)
    backup: Backup[];

    @ManyToOne(() => Storage,storage => storage.backupStorage)
    storage: Storage[];

}