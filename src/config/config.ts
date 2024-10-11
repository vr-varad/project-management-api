import dotenvflow from 'dotenv-flow'
dotenvflow.config()

export default {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL
}
