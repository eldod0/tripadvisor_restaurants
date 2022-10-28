import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

const uri = process.env['DB_CONN_STRING'];

let client
let clientPromise : Promise<MongoClient>

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local')
}

client = new MongoClient(uri)
clientPromise = client.connect()

export default clientPromise