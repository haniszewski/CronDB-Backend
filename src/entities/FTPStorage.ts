import { Entity } from "typeorm";
import { Storage } from "./Storage";

@Entity('ftp_storages')
export class FTPStorage extends Storage{

}