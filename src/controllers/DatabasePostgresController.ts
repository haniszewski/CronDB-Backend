import { Request, Response } from "express";
import axios from "axios";
import { DatabasePostgres } from "../entities/DatabasePostgres";
import { connectAndGetRepositories } from "../config/dataSource";



export class DatabasePostgresController {
    static async testConnection(req: Request, res: Response): Promise<Response> {
        try {
            const { dbHost, dbPort, dbLogin, dbPass, dbName } = req.body?.dbAuth
            // Send info to python backend to connect to database
            const dbResponse = true;
            if (!dbResponse) {
                return res.status(200).json({ message: "Connected!" })
            } else {
                return res.status(400).json({ message: "Connection failed!" })
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }

    static async addDatabase(req: Request, res: Response): Promise<Response> {
        try {
            console.log('Adding database');
            const { dbHost, dbPort, dbLogin, dbPass, dbName, pgVersion } = req.body?.dbAuth
            const dbPostgres = new DatabasePostgres()
            dbPostgres.host = dbHost
            dbPostgres.port = dbPort
            dbPostgres.user = dbLogin
            dbPostgres.password = dbPass
            dbPostgres.dbName = dbName
            dbPostgres.dialect = 'postgres'
            dbPostgres.version = pgVersion

            const { DatabasePostgresRepository } = await connectAndGetRepositories();
            await DatabasePostgresRepository.save(dbPostgres);

            return res.status(200).json({ message: 'Added new DatabasePostgres' })

        } catch (error) {
            console.log(error)

            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getAllDatabases(req: Request, res: Response): Promise<Response> {
        try {
            const { DatabasePostgresRepository } = await connectAndGetRepositories();
            const pgDatabases = await DatabasePostgresRepository.find({
                select: ['id','host','port','dbName','dialect','user','password']
            });
            return res.status(200).json(pgDatabases);
        } catch (error) {

            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}