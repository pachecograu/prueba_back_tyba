import { client } from '../config/connBD';

interface Hystory {
    user: string
    transaction: string
    date: Date
}

export const createTable = async () => {
    await client.query(`CREATE TABLE IF NOT EXISTS test.history
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        "user" character varying COLLATE pg_catalog."default" NOT NULL,
        transaction character varying COLLATE pg_catalog."default" NOT NULL,
        date date NOT NULL,
        CONSTRAINT history_pkey PRIMARY KEY (id)
    )`, (err: any, res: any) => {
        if (err) throw err
        //client.end()
    })
}

export const insert = async (history: Hystory) => {
    try {
        let date = fortmatDate(history.date);
        const result = await client.query({
            text: `INSERT INTO test.history("user", transaction, date) VALUES ('${history.user}', '${history.transaction}', '${date}');`,
        });
        return result.rowCount;
    } catch (error) {
        return error;
    }
}

export const findAll = async () => {
    const result = await client.query({
        rowMode: 'array',
        text: `SELECT * from test.history;`,
    });
    //await client.end();
    return result.rows;
}

function fortmatDate(date: Date) {
    return `${date.getFullYear()}-${(date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
}