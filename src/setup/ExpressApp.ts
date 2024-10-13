/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express'
import { UserRouter } from '../routes/Product.routes'
import Logger from '../utils/logger'
import { StatusCodes } from 'http-status-codes'
import { ZodError } from 'zod'
import limiter from '../utils/rateLimiter'

const ExpressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(limiter)
    app.get('/',(req:Request, res:Response)=>{
        res.send('Project-Management-API')
    })
    app.use(UserRouter)
    app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
        Logger.error(err.message);
        if (err instanceof ZodError) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                errors: err.errors 
            })
        }else{
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: err.message || 'Internal Server Error'
            });
        }
    });
    
}


export default ExpressApp
