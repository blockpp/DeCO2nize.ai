import OpenAI from "openai";
 
require('dotenv').config();
key = process.env.OPENAI_KEY
const openai = new OpenAI()
export async function reportGeneration(_content){
    try {
        const completion =  await openai.chat.completions.create({
            messages : [{role : "system" ,content : `give a report on this carbon credit data ${_content}` }],
            model : "gpt-3.5-turbo"
        });
        return completion.choices[0];
    } catch (error) {
        throw error 
    }
}

