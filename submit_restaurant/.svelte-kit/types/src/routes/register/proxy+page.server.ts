// @ts-nocheck
import type { Actions } from './$types';
import clientPromise from '../../lib/mongodb-client';
const saltRounds = 10;

export const actions = {
  submit_rest: async ({cookies, request}: import('./$types').RequestEvent) => {
    const datas = await request.formData();
    const dbConnection = await clientPromise;
    const dbName = process.env['DB_NAME'];
    const db = dbConnection.db('application');
    const collectionName = process.env['COLLECTION_NAME'];
    const collection = db.collection('users');
    let Hash = null;
    bcrypt.hash(datas.get('user_password'),saltRounds, (err,hash:string)=>{
        Hash = hash;
    });
    const newOne = await collection.insertOne({
      user_name:datas.get('user_name'),
      user_password:datas.get('user_password')
    });
    console.log(newOne);
    return { success: true};
  }
};;null as any as Actions;