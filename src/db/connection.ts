import { Sequelize } from 'sequelize';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sprint08_db', 'root', '24MyCaboSQL25', {
    host: 'localhost',
    dialect: 'mysql'
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default sequelize;