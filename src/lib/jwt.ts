import jwt, { JwtPayload } from 'jsonwebtoken';

interface SignOption {
    expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
    expiresIn: 60 * 60 // 3600초, 1시간
};

// 토큰 생성
export const createAccessToken = (payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) => {
    const SECRET_KEY = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, SECRET_KEY!, options);
    return token;
}

// 토큰 검증
export const verifyToken = (token: string) => {
    try {
        const SECRET_KEY = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, SECRET_KEY!);
        return decoded as JwtPayload;
    } catch(err) {
        console.log(`[JWT_ERROR]`, err);
        return null;
    }
}