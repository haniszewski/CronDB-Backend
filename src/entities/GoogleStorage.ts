import { Entity } from "typeorm";
import { Storage } from "./Storage";

@Entity('google_storage')
export class GoogleStorage extends Storage{

}