import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

// s3 버킷 정보 설정
const s3 = new S3Client({
    credentials : {
        accessKeyId : String(process.env.S3_ACCESS_KEY),
        secretAccessKey : String(process.env.S3_SECRET_ACCESS_KEY)
    },
    region : "ap-northeast-2"
})

async function uploadFileToS3(file: Buffer, fileName: String, fileType: any) {
    const fileBuffer = file;

    const params = {
        Bucket: 'embers-sports',
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: fileType
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const imageUrl = `https://embers-sports.s3.amazonaws.com/${params.Key}`;
    return imageUrl;
    
}
export async function PUT(req: Request, res: Response) {
    try {
        const formData = await req.formData();
        const file = formData.get('image');

        if(!file) {
            return NextResponse.json({msg: 'file not found'}, {status: 400})
        }
        if(file instanceof File) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = await uploadFileToS3(buffer, file.name, file.type);
            return NextResponse.json({msg: fileName}, {status: 200});
        }

    } catch(err) {
        console.log(err);
        return NextResponse.json({msg: 'error'}, {status: 500})
    }
}

// config 설정(미들웨어에서 이미지 데이터를 처리하기 위해 반드시 필요함)
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};