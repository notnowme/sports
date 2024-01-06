import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { db } from "@/lib/db";

// s3 버킷 정보 설정
const s3 = new S3Client({
    credentials : {
        accessKeyId : String(process.env.S3_ACCESS_KEY),
        secretAccessKey : String(process.env.S3_SECRET_ACCESS_KEY)
    },
    region : "ap-northeast-2"
});

async function uploadFileToS3(file: Buffer, fileName: String, fileType: any) {
    const params = {
        Bucket: 'embers-sports',
        Key: `${fileName}-${Date.now()}`,
        Body: file,
        ContentType: fileType
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const imageUrl = `https://embers-sports.s3.amazonaws.com/${params.Key}`;
    return imageUrl;
}

export async function PATCH(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if(!session) {
            return NextResponse.json({msg: 'Unauthorized'}, { status: 401 });
        }
        const formData = await req.formData();
        const file = formData.get('image');

        if(!file) {
            return NextResponse.json({msg: 'File not found'}, { status: 400 });
        }
        if(!(file instanceof File)) {
            return NextResponse.json({msg: 'Not File'}, { status: 400 })
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const url = await uploadFileToS3(buffer, file.name, file.type);
        await db.user.update({
            where: {
                id: session.user?.id
            },
            data: {
                imageUrl: url
            }
        });
        return NextResponse.json({msg: 'ok'}, {status:200});
    } catch(err) {
        console.log(`[USER_S3_PATCH_ERR]`, err);
        return NextResponse.json({msg: 'Internal Server Error'}, {status: 500});
    }
}

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };