import express from 'express'
import config from './config/config';
import Logger from './utils/logger';
import ExpressApp from './setup/ExpressApp';
import sequelize from './setup/DbConnection';

const app = express();



const StartServer = async()=>{
    ExpressApp(app)
    try {
        await sequelize.authenticate();
        Logger.log('Database Connection has been established successfully.');
    } catch (error) {
        Logger.error(`Unable to connect to the database ${(error as Error).message}`);
    }
    app.listen(config.PORT,()=>{
        Logger.log(`Server Started At Port ${config.PORT}`)
    })
}

void StartServer()