import type {  NextApiRequest,NextApiResponse } from "next";
import nextConnect from 'next-connect'
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import prisma from "@prisma/client";
import dotenv from "dotenv"
dotenv.config();

// s3 버킷 정보 설정

const s3 = new S3Client({
    credentials : {
        accessKeyId : String(process.env.S3_ACCESS_KEY),
        secretAccessKey : String(process.env.S3_SECRET_ACCES_KEY)
    },
    region : "ap-northeast-2"
})

// s3에 접근하는 미들웨어 (multer-S3)

const upload = multer({
    storage : multerS3({
        s3 : s3,
        bucket : "emmers-sports",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key : (req, file, callback) =>{
            callback(null, `${file.originalname}-${Date.now().toString()}`)
        }
    })
})

// const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
//     // Handle any other HTTP method
//     onNoMatch(req, res) {
//       res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//     },
//   });