// import mysql from 'mysql2/promise';

// let db;

// try {
//     db = mysql.createConnection({
//         user : process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         host: process.env.DB_HOST,
//         port: 3306,
//         database: process.env.DB
//     });

//     // 연결 객체를 사용하여 쿼리 등의 작업을 수행할 수 있습니다.
//     // 예: db.query('SELECT * FROM your_table', (err, results) => { ... });
// } catch (err) {
//     console.log('db 연동 실패');
//     console.error(err);
// }

// export default db;

// import mysql, { Connection } from 'mysql2/promise'

// const conn = {
//     host: 'embers-db.c1qkpze8dint.ap-northeast-2.rds.amazonaws.com',
//     user : 'embers',
//     password: 'embers1226',
//     database: 'embers-db',
//     port: 3306
// }

// const createConnection = async(): Promise<Connection> => {
//     return await mysql.createConnection(conn);
// }

// const queryPromise = async(queryString: string, values: any[]):Promise<any> => {
//     const conn = await createConnection();

//     try {
//         const results = await conn.execute(queryString, values);
//         return results;
//     } catch(err) {
//         console.log(`[DB_CONFIG_ERROR]`, err)
//         throw err;
//     } finally {
//         conn.end();
//     }
// };

// export default queryPromise;

import mysql from 'mysql2/promise';

const createDbConnection = async () => {
  const db = await mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 3306,
    database: process.env.DB,
  });

  return db;
};

const getDb = async () => {
  const db = await createDbConnection();
  return db;
};

export default getDb;