// @ts-nocheck
import type { PageServerLoad  } from './$types';
import clientPromise from '../lib/mongodb-client';

export const load = async () => {
    const dbConnection = await clientPromise;
    const dbName = process.env['DB_NAME'];
    const db = dbConnection.db(dbName);
    const collectionName = String(process.env['COLLECTION_NAME']);
    const collection = db.collection(collectionName);

    //const documents = await collection.find().sort({rest_rating:1}).limit(2).toArray();
    return{
        documents:JSON.parse(JSON.stringify(await collection.find().sort({rest_rating:1}).limit(10).toArray()))
    }
};null as any as PageServerLoad;