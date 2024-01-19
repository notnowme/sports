export interface IObj {
    title: string;
    latlng: number[];
    img: string
}

export interface PosObj {
    [key: string] : IObj[]
}

export const posObj: PosObj = {
    kleague: [
            {
                title: '울산', 
                latlng: [35.5352, 129.2595],
                img: '/img/kleague/emblem_K01.png'
            },
            {
                title: '포항',
                latlng: [35.9977, 129.3844],
                img: '/img/kleague/emblem_K03.png'
            },
            {
                title: '광주',
                latlng: [35.1311, 126.8749],
                img: '/img/kleague/emblem_K22.png'
            },
            {
                title: '전북',
                latlng: [35.8681, 127.0644],
                img: '/img/kleague/emblem_K05.png'
            },
            {
                title: '인천',
                latlng: [37.4661, 126.643],
                img: '/img/kleague/emblem_K18.png'
            },
            {
                title: '대구',
                latlng: [35.8812, 128.5882],
                img: '/img/kleague/emblem_K17.png'
            },
            {
                title: '서울',
                latlng: [37.5682, 126.8972],
                img: '/img/kleague/emblem_K09.png'
            },
            {
                title: '대전',
                latlng: [36.3652, 127.3248],
                img: '/img/kleague/emblem_K10.png'
            },
            {
                title: '제주',
                latlng: [33.2461, 126.5093],
                img: '/img/kleague/emblem_K04.png'
            },
            {
                title: '강원',
                latlng: [37.7732, 128.8973],
                img: '/img/kleague/emblem_K21.png'
            },
            {
                title: '수원',
                latlng: [37.2977, 127.0113],
                img: '/img/kleague/emblem_K29.png'
            },
            {
                title: '김천',
                latlng: [36.1395, 128.0862],
                img: '/img/kleague/emblem_K35.png'
            },
        ],
        kbo: [
            {
                title: 'LG',
                latlng: [37.5122, 127.0719],
                img: '/img/kbo/emblemF_LG.png'
            },
            {
                title: '두산',
                latlng: [37.5122, 127.0723],
                img: '/img/kbo/emblemF_OB.png'
            },
            {
                title: 'KT',
                latlng: [37.2997, 127.0096],
                img: '/img/kbo/emblemF_KT.png'
            },
            {
                title: 'SSG',
                latlng: [37.4370, 126.6932],
                img: '/img/kbo/emblemF_SK.png'
            },
            {
                title: 'NC',
                latlng: [35.2225, 128.5823],
                img: '/img/kbo/emblemF_NC.png'
            },
            {
                title: 'KIA',
                latlng: [35.1682, 126.8884],
                img: '/img/kbo/emblemF_HT.png'
            },
            {
                title: '롯데',
                latlng: [35.1940, 129.0615],
                img: '/img/kbo/emblemF_LT.png'
            },
            {
                title: '삼성',
                latlng: [35.8410, 128.6819],
                img: '/img/kbo/emblemF_SS.png'
            },
            {
                title: '한화',
                latlng: [36.3172, 127.4285],
                img: '/img/kbo/emblemF_HH.png'
            },
            {
                title: '키움',
                latlng: [37.4981, 126.8670],
                img: '/img/kbo/emblemF_WO.png'
            },
        ]
}