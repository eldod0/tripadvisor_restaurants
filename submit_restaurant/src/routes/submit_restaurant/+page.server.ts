
import type { Actions } from './$types';
import clientPromise from '../../lib/mongodb-client';
import { json } from '@sveltejs/kit';


export const actions: Actions = {
  submit_rest: async ({cookies, request}) => {
    const datas = await request.formData();
    const dbConnection = await clientPromise;
    const dbName = process.env['DB_NAME'];
    const db = dbConnection.db('application');
    const collectionName = process.env['COLLECTION_NAME'];
    const collection = db.collection('restaurants');
    const newOne = await collection.insertOne({
      rest_name:datas.get('rest_name'),
      rest_address:datas.get('rest_address'),
      rest_description:datas.get('rest_description'),
      rest_rating:0
    });
    console.log(newOne);
    return { success: true};
  }
};