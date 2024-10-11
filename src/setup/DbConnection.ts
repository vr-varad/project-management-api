import { Sequelize } from 'sequelize'
import config from '../config/config'

const sequelize = new Sequelize(String(config.DATABASE_URL), {
    logging: false
})

export default sequelize

