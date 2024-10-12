/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express'
import { UserRouter } from '../routes/Product.routes'
import Logger from '../utils/logger'
import { StatusCodes } from 'http-status-codes'

const ExpressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(UserRouter)
    app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
        Logger.error(err.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message || 'Internal Server Error'
        });
    });
    
}


export default ExpressApp
