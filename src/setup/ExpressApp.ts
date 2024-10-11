import express, { Application } from 'express'

const ExpressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}


export default ExpressApp
