import jwt, { JwtPayload } from 'jsonwebtoken';
import { db } from './db';

interface SignOption {
    expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
    expiresIn: '10s' // 1시간
};

const DEFAULT_REFRESH_OPTION: SignOption = {
    expiresIn: '7d' // 1주일
}
export enum TokenType {
    Access = "access",
    Refresh = "refresh"
}
export enum JwtErrorType {
    INVAILD = 'invaild',
    EXPIRED = 'expired',
    VERIFY = 'verify'
}

// 토큰 생성
export const createToken = (payload: JwtPayload, type: TokenType) => {
    const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    if (!SECRET_KEY) {
        console.error('JWT secret key is not defined.');
        return null;
    }

    const options: SignOption = type === 'access' ? DEFAULT_SIGN_OPTION : DEFAULT_REFRESH_OPTION;
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
}

// 토큰 검증
export const verifyToken = (token: string) => {
    try {
        const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

        if(!SECRET_KEY) {
            return false;
        }

        const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
        return decoded;

        // Jwt 라이브러리에서 에러 캐치를 해줌
        // 유효하지 않음, 만료 기간, 그 외 에러.
    } catch(err) {
        if(err instanceof Error) {
            if(err.name === 'JsonWebTokenError') {
                console.error(`[JWT_INVAILD_TOKEN]`, err.message);
                return JwtErrorType.INVAILD;
            } else if(err.name === 'TokenExpiredError') {
                console.error(`[JWT_EXPIRED_TOKEN]`, err.message);
                return JwtErrorType.EXPIRED;
            } else {
                console.error(`[JWT_VERIFY_ERROR]`, err.message);
                return JwtErrorType.VERIFY;
            }
        }
        return false;
    }
}

// 리프레시 토큰 생성 및 DB 저장
export const createRefreshToken = async (user: {id: string}) => {
    try {
        const refreshToken = createToken(user, TokenType.Refresh);
        if(refreshToken) {
            await db.refreshToken.upsert({
                where: {
                    userId: user.id
                },
                update: {
                    refreshToken,
                },
                create: {
                    userId: user.id,
                    refreshToken
                }
            });
            return true;
        }
    } catch(err) {
        console.error(`[JWT_REFRESH_ERROR]`, err);
        return false;
    }
}