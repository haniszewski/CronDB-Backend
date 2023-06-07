import { Request, Response } from 'express';
import { connectAndGetRepositories } from '../config/dataSource';
import { Schedule } from '../entities/Schedule';

export class ScheduleController {
    static async add(req: Request, res: Response): Promise<Response> {
        try {
            const { jname, /*jsource,*/ jcron, jnumberOfCopy, /*jdestination,*/ jdatabase, jstorage } = req.body
            const nschedule = new Schedule();
            nschedule.name = jname;
            // nschedule.source = jsource;
            nschedule.cron = jcron;
            nschedule.numberOfCopy = jnumberOfCopy;
            // nschedule.destination = jdestination;
            nschedule.database = jdatabase;
            nschedule.storage = jstorage;

            const { ScheduleRepository } = await connectAndGetRepositories();
            await ScheduleRepository.save(nschedule);

            res.status(201).json({ message: 'Added new Schedule' })

        } catch (error) {
            console.log(`Error: ${error}`)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}