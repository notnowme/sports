import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import prisma from "@prisma/client";
import dotenv from "dotenv"
import nextConnect from 'next-connect';
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
        bucket : "embers-sports",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key : (req, file, callback) =>{
            callback(null, `${file.originalname}-${Date.now().toString()}`)
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
})

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
    onError(error, req, res, next) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
})
.use(upload.single('image')) // 'image'는 formData에서 설정한 필드 이름

apiRoute.post((req, res) => {
    // 여기서 req와 res는 이미 NextApiRequest와 NextApiResponse 타입으로 추론됨
    if (req.file) {
        res.status(200).json({ url: req.file.location });
    } else {
        res.status(400).json({ error: 'No file uploaded' });
    }
});

export default apiRoute;


// config 설정(미들웨어에서 이미지 데이터를 처리하기 위해 반드시 필요함)
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};