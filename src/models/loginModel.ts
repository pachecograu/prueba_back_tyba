import { client } from '../config/connBD';
const md5 = require('md5');

interface Login {
    user: string
    token: string
    date: Date
}

interface User {
    id: number
    username: string
    password: string
    name: string
}

export const createTable = async () => {
    await client.query(`CREATE TABLE IF NOT EXISTS test.login
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        "user" character varying COLLATE pg_catalog."default" NOT NULL,
        token character varying COLLATE pg_catalog."default",
        date timestamp without time zone NOT NULL,
        state boolean NOT NULL DEFAULT true,
        CONSTRAINT login_pkey PRIMARY KEY (id)
    )`, (err: any, res: any) => {
        if (err) throw err
        //client.end()
    })
}

export const insert = async (login: Login) => {
    try {
        const result = await client.query({
            text: `INSERT INTO test.login("user", token, date)
            VALUES ('${login.user}', '${login.token}', '${fortmatDate(login.date)}');`,
        });
        return result.rowCount;
    } catch (error) {
        return error;
    }
}

export const update = async (token: string) => {
    try {
        const result = await client.query({
            text: `UPDATE test.login
        SET state=false
        WHERE token = '${token}';`,
        });
        return result.rowCount;
    } catch (error) {
        return error;
    }
}

export const find = async (token: string) => {
    try {
        const result = await client.query({
            rowMode: 'array',
            text: `SELECT * from test.login WHERE token = '${token}';`,
        });
        //await client.end();
        return result.rows[0];
    } catch (error) {
        return error;
    }
}

function fortmatDate(date: Date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
}