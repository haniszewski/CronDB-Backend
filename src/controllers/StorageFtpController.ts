import { Request, Response } from "express";
import { connectAndGetRepositories } from "../config/dataSource";
import { StorageFTP } from "../entities/StorageFTP";

export class StorageFtpController {
    static async testConnection(req: Request, res: Response): Promise<Response> {
        try {
            const { host } = req.body?.ftpAuth
            // Send info to python backend to connect to database
            const ftpResp = true;
            if (!ftpResp) {
                return res.status(200).json({ message: "Connected!" })
            } else {
                return res.status(400).json({ message: "Connection failed!" })
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }

    static async addStorage(req: Request, res: Response): Promise<Response> {
        try {
            const { ftpHost, ftpPort, ftpLogin, ftpPass, passive} = req.body?.ftpAuth

            const { StorageFtpRepository } = await connectAndGetRepositories();
            // await DatabasePostgresRepository.save(dbPostgres);

            return res.status(200).json({ message: 'Added new Storage' })

        } catch (error) {
            console.log(error)

            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getAllDatabases(req: Request, res: Response): Promise<Response> {
        try {
            const { DatabasePostgresRepository } = await connectAndGetRepositories();
            const pgDatabases = await DatabasePostgresRepository.find({
                select: ['id', 'host', 'port', 'dbName', 'dialect']
            });
            return res.status(200).json(pgDatabases);
        } catch (error) {

            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}