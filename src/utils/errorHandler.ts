import { StatusCodes } from 'http-status-codes'
class AppError extends Error {
    public readonly name: string
    public readonly statusCode: StatusCodes
    public readonly isOperational: boolean
    constructor(
        name: string,
        statusCode: StatusCodes,
        description: string,
        isOperational = true
    ) {
        super(description)
        Object.setPrototypeOf(this, new.target.prototype)

        this.name = name
        this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR
        this.isOperational = isOperational

        Error.captureStackTrace(this)
    }
}

export class NotFoundError extends AppError {
    constructor(description: string) {
        super('Not Found', StatusCodes.NOT_FOUND, description)
    }
}

export class DataBaseError extends AppError {
    constructor(description: string) {
        super('Database Error', StatusCodes.INTERNAL_SERVER_ERROR, description)
    }
}

