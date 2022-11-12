import { Database } from 'sqlite3';

const DB_LOCATION = process.env.DEV ? '../db.dev.sqlite' : '/data/db.sqlite'

const db = new Database(DB_LOCATION);

// Fetch a random integer between -99 and +99
db.get(
    'SELECT RANDOM() % 100 as result',
    (_, res) => console.log(res)
);