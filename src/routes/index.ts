import authRouter from './auth/AuthRouter';
import userRouter from './users/UsersRouter';
import databasesRouter from './databases/DatabasesRouter'
import storagesRouter from './storages'
import scheduleRouter from './schedules'

export default {
    authRouter,
    userRouter,
    databasesRouter,
    storagesRouter,
    scheduleRouter
};