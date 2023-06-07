import { Request, Response } from 'express';
import { connectAndGetRepositories } from '../config/dataSource';
import { Schedule } from '../entities/Schedule';

export class ScheduleController {
    static async add(req: Request, res: Response): Promise<Response> {
        try {
            const { name, /*source,*/ cron, numberOfCopy, /*destination,*/ database, storage } = req.body
            const nschedule = new Schedule();
            nschedule.name = name;
            // nschedule.source = source;
            nschedule.cron = cron;
            nschedule.numberOfCopy = numberOfCopy;
            // nschedule.destination = destination;
            nschedule.database = database;
            nschedule.storage = storage;

            const { ScheduleRepository } = await connectAndGetRepositories();
            await ScheduleRepository.save(nschedule);

            res.status(201).json({ message: 'Added new Schedule' })

        } catch (error) {
            console.log(`Error: ${error}`)
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const idNumber = Number(id);

            const { ScheduleRepository } = await connectAndGetRepositories();

            const delResp = await ScheduleRepository.delete({ id: idNumber });

            if (delResp.affected > 0) {
                res.status(200).json({ message: 'Deleted schedule' })
            } else {
                res.status(400).json({ message: 'No schedule to delete' })
            }

        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}