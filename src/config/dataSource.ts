import { DataSource, Repository } from "typeorm";
import ormConfig from "../ormconfig";
import { User } from "../entities/User";
import { DatabasePostgres } from "../entities/DatabasePostgres";
import { SnakeNamingStrategy } from "./SnakeNamingStrategy";
import { StorageFtp } from "../entities/StorageFtp";
import { Schedule } from "../entities/Schedule";

const typedOrmConfig = {
  ...ormConfig,
  type: ormConfig.type as any,
  namingStrategy: new SnakeNamingStrategy(),
};

export const myDataSource = new DataSource(typedOrmConfig);

let UserRepository: Repository<User> | undefined = undefined;
let DatabasePostgresRepository: Repository<DatabasePostgres> | undefined = undefined;
let StorageFtpRepository: Repository<StorageFtp> | undefined = undefined;
let ScheduleRepository: Repository<Schedule> | undefined = undefined;

export async function connectAndGetRepositories() {
  if (UserRepository === undefined) {
    await myDataSource.initialize();
    UserRepository = myDataSource.getRepository(User);
    DatabasePostgresRepository = myDataSource.getRepository(DatabasePostgres);
    StorageFtpRepository = myDataSource.getRepository(StorageFtp);
    ScheduleRepository = myDataSource.getRepository(Schedule);
  }


  return {
    UserRepository: UserRepository,
    DatabasePostgresRepository: DatabasePostgresRepository,
    StorageFtpRepository: StorageFtpRepository,
    ScheduleRepository: ScheduleRepository
  };
}
