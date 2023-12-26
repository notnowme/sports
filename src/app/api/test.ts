import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../config/db');

export default async function test(req : NextApiRequest, res : NextApiResponse) {

   await db.query("SELECT NOW() as time",
    function (err: any, result: any) {
        if(err) {
            console.log(err)
            console.log('쿼리문 오류')
        } else {
            console.log('연동 성공',result);
            res.json(result);
        }
    });
}

const axios = require('axios');

async function testAPI() {
  try {
    const response = await axios.get('http://localhost:3000/api/test');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

testAPI();
