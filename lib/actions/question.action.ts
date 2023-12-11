"use server"

import { ConnectToDatabase } from "../mongoose";

export async function createQuestion(params:any){
    try{
        await ConnectToDatabase();
    }
    catch(error){
     console.log(error);
    }
}