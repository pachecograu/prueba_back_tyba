import { client } from '../config/connBD';
const md5 = require('md5');

interface User {
    username: string
    password: string
    name: string
}

export const createTable = async () => {
    await client.query(`CREATE TABLE IF NOT EXISTS test.users
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        username character varying COLLATE pg_catalog."default" NOT NULL,
        password character varying COLLATE pg_catalog."default",
        name character varying COLLATE pg_catalog."default",
        CONSTRAINT users_pkey PRIMARY KEY (id)
    )`, (err: any, res: any) => {
        if (err) throw err
        //client.end()
    })
}

export const insert = async (user: User) => {
    try {
        const result = await client.query({
            text: `INSERT INTO test.users(username, password, name)
            VALUES ('${user.username}', '${md5(user.password)}', '${user.name}');`,
        });
        return result.rowCount;
    } catch (error) {
        return error;
    }
}

export const find = async (user: User) => {
    const result = await client.query({
        rowMode: 'array',
        text: `SELECT * from test.users WHERE username = '${user.username}';`,
    });
    //await client.end();
    return result.rows[0];
}