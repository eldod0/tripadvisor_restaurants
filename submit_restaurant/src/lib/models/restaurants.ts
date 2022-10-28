import type { Int32, ObjectId } from "mongodb";

export default class restaurants {
    constructor(public rest_name: string, public rest_address: number, public rest_description: string, public rest_rating: Int32, public id?: ObjectId) {}
}