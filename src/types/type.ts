import { UserRole } from "@prisma/client";


// 페이지 헤더 아이템 타입.
export type Emblem = {
    name: string;
    imgUrl: string;
}

export type TeamPageProps = {
    teamName: string
};

// 프론트에서 전반적으로 쓸 유저 정보 타입.
export interface Author {
    id: string;
    nick: string;
    role: UserRole;
    imageUrl: string;
};

// 게시글에서 쓸 유저 정보 및 게시글 타입.
export interface BoardWithAuthor {
    author: Author;
    likes: {
        id: string;
    }[];
    comment: {
        authorNo: number;
    }[];
};

// 댓글에서 쓸 유저 정보 및 댓글 타입.
export interface CommentWithAuthor {
    author: Author;
    likes: Author[];
}




