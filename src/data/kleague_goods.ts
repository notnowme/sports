import { GoodsData } from '@/types/type'

const kleage_goods = [
    {
      "": 0,
      "울산현대": ['29,000원', '2023 크리스마스 무릎담요 (디자인 2종)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1702344788502_1000.jpg'],
      "포항스틸러스": ['35,000원', '2023 스틸러스 대형패넌트', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/48/1000000253/1000000253_add2_060.png'],
      "광주FC": ['30,000원', '광주FC 니트머플러', 'https://shop-phinf.pstatic.net/20230519_55/1684482594000OFXao_JPEG/7303102953052266_716738563.JPG?type=f296_296'],
      "인천유나이티드": ['90,000원', '2022 홈 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000348/1000000348_add3_07.jpg'],
      "대구FC": ['119,000원', '\"SON OF SUN\" 이근호 은퇴 기념 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1701158509162_1000.jpg'],
      "FC서울": ['105,000 원', '23 홈 유니폼 성인 긴팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023221437451_S.jpg'],
      "대전하나시티즌": ['40,000원', 'DHFC 티셔츠 (화이트)', 'https://dhcfcshop.com/web/product/big/202305/28ed752f8586627ebe3bedfab635e4d1.jpg'],
      "제주유나이티드": ['2,000원', '23 제주 홈 유니폼 부채', 'https://www.jeju-utd.com/uploadfile/shop_product/202388659933_B.jpg'],
      "강원FC": ['69,000원', '휠라X강원FC 맨투맨(오트밀)', 'https://shop-phinf.pstatic.net/20220921_152/16637286721860KIh8_JPEG/64864505986587747_1394134529.jpg?type=f295_381'],
      "수원FC": ['20,000원', '수원FC 명함 케이스 (2종)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1702361600355_1000.jpg'],
      "수원삼성": ['59,000원', '23 원정 쇼트', 'http://www.bluewingsshop.com/shopimages/bluewings/0150020000352.jpg?1689659395']
    },
    {
      "": 1,
      "울산현대": ['22,000원', '2023 크리스마스 전사머플러 (디자인 2종)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1702344814703_1000.jpg'],
      "포항스틸러스": ['137,000원', '2023 스틸러스 스페셜 유니폼 (풀마킹)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/47/1000000252/1000000252_add2_034.png'],
      "광주FC": ['30,000원', '2022 광주FC 우승 스냅백', 'https://shop-phinf.pstatic.net/20221102_217/16673766970485a0rP_JPEG/68512480754247823_700148379.JPG?type=f296_296'],
      "인천유나이티드": ['5,000원', '2022 골키퍼 홈 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000351/1000000351_add3_011.jpg'],
      "대구FC": ['5,000원', '대구한의대학교 스폰서 마킹', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1694755575282_1000.png'],
      "FC서울": ['99,000 원', '23 어웨이 유니폼 성인 반팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202318637260_S.jpg'],
      "대전하나시티즌": ['40,000원', 'DHFC 티셔츠 (그린)', 'https://dhcfcshop.com/web/product/big/202305/60f85dbd8307a3588b8ac96a720b2cc2.jpg'],
      "제주유나이티드": ['19,000원', '제주 인형 머리띠', 'https://www.jeju-utd.com/uploadfile/shop_product/2023843145_B.jpg'],
      "강원FC": ['79,000원', '휠라X강원FC 후드티(네이비/오트밀/멜란지)', 'https://shop-phinf.pstatic.net/20220921_148/1663732421888BGaNE_JPEG/64868317608393214_1039520170.jpg?type=f295_381'],
      "수원FC": ['25,000원', '수원더비 장패드', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1700543482044_1000.jpg'],
      "수원삼성": ['59,000원', '23 홈 쇼트', 'http://www.bluewingsshop.com/shopimages/bluewings/0150010000542.jpg?1689659565']
    },
    {
      "": 2,
      "울산현대": ['22,000원', '울산현대 2023 K리그1 챔피언 일러스트 전사머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1699006550546_1000.jpg'],
      "포항스틸러스": ['59,000원', '2023 FA컵 우승 기념 티셔츠', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/45/1000000251/1000000251_add2_063.png'],
      "광주FC": ['50,000원', '2022 광주FC 우승 세리머니티', 'https://shop-phinf.pstatic.net/20221102_85/1667372852200a8PFD_JPEG/68508694872617647_1017346813.JPG?type=f296_296'],
      "인천유나이티드": ['5,000원', '2022 골키퍼 원정 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000352/1000000352_add3_074.jpg'],
      "대구FC": ['18,000원', '오승훈 200경기 출전 기념 MD 2종', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1694766586111_1000.jpg'],
      "FC서울": ['99,000 원', '23 GK 홈 유니폼 성인 반팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023110104637_S.jpg'],
      "대전하나시티즌": ['40,000원', 'DHFC 티셔츠 (자주)', 'https://dhcfcshop.com/web/product/big/202305/ec599874ce9c59dbc1f552739b38bcfb.jpg'],
      "제주유나이티드": ['2,000원', '제주 감귤이 부채', 'https://www.jeju-utd.com/uploadfile/shop_product/202372323412_B.jpg'],
      "강원FC": ['6,000원', '김대원 10-10 기념 패치', 'https://shop-phinf.pstatic.net/20220907_16/1662522282187HlPSf_JPEG/63658127904194687_2002645104.jpg?type=f295_381'],
      "수원FC": ['30,000원', '수원더비 무릎담요', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1700543210830_1000.jpg'],
      "수원삼성": ['99000원', '23 홈 유니폼', 'http://www.bluewingsshop.com/shopimages/bluewings/0150010000512.jpg?1681799395']
    },
    {
      "": 3,
      "울산현대": ['29,000원', '울산현대 2023 K리그1 챔피언 무릎담요', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1700196122160_1000.jpg'],
      "포항스틸러스": ['32,000원', '2023 FA컵 우승 기념 모자', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/45/1000000250/1000000250_add2_086.png'],
      "광주FC": ['10,000원', '광주FC 마스코트 머리띠', 'https://shop-phinf.pstatic.net/20210907_174/1630996885649qkAXX_JPEG/32132665255389956_770954547.JPG?type=f296_296'],
      "인천유나이티드": ['5,000원', '2022 홈 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000344/1000000344_add3_025.jpg'],
      "대구FC": ['119,000원', '2023 대구FC 3rd KIT 필드', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1687912329803_1000.jpg'],
      "FC서울": ['99,000 원', '23 GK 어웨이 유니폼 성인 반팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231101047_S.jpg'],
      "대전하나시티즌": ['10,000원', 'DHFC 스웨이드 응원타월 (하나그린)', 'https://dhcfcshop.com/web/product/big/202303/8d8cf16a07ad0a34227f286bf2390309.jpg'],
      "제주유나이티드": ['3,000원', '제주 스티커 모음', 'https://www.jeju-utd.com/uploadfile/shop_product/202362772561_B.jpg'],
      "강원FC": ['79,000원', '2022 FILA 반팔 PIQUE SHIRTS', 'https://shop-phinf.pstatic.net/20220511_6/1652257115609JB9M6_JPEG/53392943362354506_1762099342.jpg?type=f295_381'],
      "수원FC": ['25,000원', '수원더비 전사머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1700540180966_1000.jpg'],
      "수원삼성": ['99000원', '23 원정 유니폼', 'http://www.bluewingsshop.com/shopimages/bluewings/0150020000332.jpg?1681799981']
    },
    {
      "": 4,
      "울산현대": ['69,000원', '울산현대 2023 K리그1 챔피언 티셔츠', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1700196161419_1000.jpg'],
      "포항스틸러스": ['28,000원', '2023 FA컵 우승 기념 니트머플러', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/45/1000000249/1000000249_add2_017.png'],
      "광주FC": ['7,000원', '광주FC 열쇠고리', 'https://shop-phinf.pstatic.net/20191128_105/1574914063522bUKdf_JPEG/12277452028349450_667959700.JPG?type=f296_296'],
      "인천유나이티드": ['90,000원', '2022 원정 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000353/1000000353_add3_025.jpg'],
      "대구FC": ['119,000원', '2023 대구FC 3rd KIT GK', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1687912272566_1000.jpg'],
      "FC서울": ['99,000 원', '23 홈 유니폼 성인 반팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202318637557_S.jpg'],
      "대전하나시티즌": ['10,000원', 'DHFC 스웨이드 응원타월 (자주)', 'https://dhcfcshop.com/web/product/big/202303/ce4ab3b079c79d9873f134c76f2ac4cf.jpg'],
      "제주유나이티드": ['13,000원', '제주 숲 K리그 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/20236311144760_B.jpg'],
      "강원FC": ['30,000원', '강원FC 우산(그레이트업사이클링)', 'https://shop-phinf.pstatic.net/20220323_58/1648002507053u9OOn_JPEG/49138395762474694_364953930.jpg?type=f295_381'],
      "수원FC": ['80,000원', '2023 수원FC 레트로 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1694652430623_1000.jpg'],
      "수원삼성": ['99000원', '23 홈 유니폼 (KIDS)', 'http://www.bluewingsshop.com/shopimages/bluewings/0150010000522.jpg?1681799802']
    },
    {
      "": 5,
      "울산현대": ['30,000원', '울산현대 2023 K리그1 챔피언 메탈 뱃지 세트', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1700195880712_1000.jpg'],
      "포항스틸러스": ['10,000원', '2023 FA컵 우승 기념 뱃지', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/11/45/1000000248/1000000248_add2_098.png'],
      "광주FC": ['13,000원', '광주FC 무릎담요', 'https://shop-phinf.pstatic.net/20180312_200/gjfc2011_1520843213348wwFtx_PNG/44149513966207952_298170217.png?type=f296_296'],
      "인천유나이티드": ['90,000원', '2022 골키퍼 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000355/1000000355_add3_02.jpg'],
      "대구FC": ['119,000원', '\"Moment in DAE9U FC\" 에드가 100경기 출전 기념 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1681365200022_1000.jpg'],
      "FC서울": ['89,000 원', '22 홈 유니폼 성인 반팔', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202218425524_S.jpg'],
      "대전하나시티즌": ['25,000원', 'DHFC 지그재그 니트머플러 (하나그린)', 'https://dhcfcshop.com/web/product/big/202303/16031f43fb59eba9d960e940bdda48d6.jpg'],
      "제주유나이티드": ['3,000원', '머핀패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023627657872_B.jpg'],
      "강원FC": ['25,000원', '2022 니트머플러', 'https://shop-phinf.pstatic.net/20220302_202/1646208746012wwGNu_JPEG/47344588444312735_490325597.jpg?type=f295_381'],
      "수원FC": ['6,000원', '수원FC 엠블럼 마그넷 뱃지', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1694413672520_1000.jpg'],
      "수원삼성": ['99,000원', '23 1st GK유니폼(레드)', 'http://www.bluewingsshop.com/shopimages/bluewings/0150030000212.jpg?1683375959']
    },
    {
      "": 6,
      "울산현대": ['33,000원', '울산현대 2023 K리그1 챔피언 메탈키링', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1693376773204_1000.jpg'],
      "포항스틸러스": ['15,000원', '스틸러스 우비 (성인)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/10/40/1000000246/1000000246_add2_093.png'],
      "광주FC": ['17,000원', '광주FC 소이 캔들', 'https://shop-phinf.pstatic.net/20180312_93/gjfc2011_1520842464084YosdN_JPEG/3473643732497278_463505863.jpg?type=f296_296'],
      "인천유나이티드": ['90,000원', '2021 홈 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/02/06/1000000226/1000000226_add3_082.jpg'],
      "대구FC": ['15,000원', '대구FC 2023 K리그 마킹지', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1680322677082_1000.png'],
      "FC서울": ['89,000 원', '23 95-96 레트로 어웨이유니폼', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023728531737_S.jpg'],
      "대전하나시티즌": ['25,000원', 'DHFC 니트머플러 (레트로)', 'https://dhcfcshop.com/web/product/big/202303/d35620fb0bfe3e2d0556fecc2c4d3cc7.jpg'],
      "제주유나이티드": ['18,000원', '제주 판쵸우의 오렌지', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516713552_B.jpg'],
      "강원FC": ['13,000원', '하나원큐 K리그1 2022 리그패치', 'https://shop-phinf.pstatic.net/20220216_275/1644998086681PcjiE_JPEG/46133866400256439_967367155.JPG?type=f295_381'],
      "수원FC": ['80,000원', '★2023 수원FC 위민 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683687504519_1000.png'],
      "수원삼성": ['23,000원', '블루윙즈 타올 머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180040000022.jpg?1692585033']
    },
    {
      "": 7,
      "울산현대": ['19,000원', '울산현대 2023 K리그1 챔피언 핫스톤 손난로(보조배터리 겸용)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1692593339091_1000.jpg'],
      "포항스틸러스": ['11,000원', '스틸러스 우비 (키즈)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/10/40/1000000245/1000000245_add2_022.png'],
      "광주FC": ['28,000원', '광주FC 락앤락 프라이드 텀블러', 'https://shop-phinf.pstatic.net/20180312_113/gjfc2011_1520836917054KDhO3_PNG/3555775901779424_1508406180.png?type=f296_296'],
      "인천유나이티드": ['90,000원', '2021 원정 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/02/06/1000000227/1000000227_add3_092.jpg'],
      "대구FC": ['119,000원', 'DAEGU FC 2023 HOME (AUTHENTIC)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934477729_1000.jpg'],
      "FC서울": ['89,000 원', '22 3rd 유니폼 상의', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2022514324765_S.jpg'],
      "대전하나시티즌": ['25,000원', 'DHFC WE ARE ONE 니트 머플러', 'https://dhcfcshop.com/web/product/big/202303/d04bc2c32665229cdc19c05c6f9b8581.jpg'],
      "제주유나이티드": ['5,000원', '동백패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516655944_B.jpg'],
      "강원FC": ['15,000원', 'GOAL머플러', 'https://shop-phinf.pstatic.net/20210420_161/1618889094993abuix_JPEG/20024990693566832_288774881.jpg?type=f295_381'],
      "수원FC": ['15,000원', '[ThankYou] 6. 박주호 응원 타올', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1685951632057_1000.png'],
      "수원삼성": ['28,000원', 'KBK 니트머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180010000202.jpg?1688713079']
    },
    {
      "": 8,
      "울산현대": ['20,000원', '울산현대 2023 K리그1 챔피언 폰케이스', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1694769127181_1000.jpg'],
      "포항스틸러스": ['25,000원', '스틸러스 검빨 장우산', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/39/1000000243/1000000243_add2_091.png'],
      "광주FC": ['30,000원', '광주FC 옥스포드 블록', 'https://shop-phinf.pstatic.net/20180309_262/gjfc2011_1520581099129zKC8K_PNG/43888258744529140_426042472.png?type=f296_296'],
      "인천유나이티드": ['5,000원', '2021 골키퍼 홈 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/05/19/1000000250/1000000250_add3_064.jpg'],
      "대구FC": ['119,000원', 'DAEGU FC 2023 AWAY (AUTHENTIC)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934491123_1000.jpg'],
      "FC서울": ['89,000 원', '23 95-96 레트로 어웨이 유니폼 (프리오더)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202372854656_S.jpg'],
      "대전하나시티즌": ['90000원', 'DHFC 2023 홈 레플리카', 'https://dhcfcshop.com/web/product/big/202303/23479b0563c3c93558ca23a0d36e92aa.jpg'],
      "제주유나이티드": ['70,000원', '21 제주 푸마 패딩쟈켓', 'https://www.jeju-utd.com/uploadfile/shop_product/202351672128_B.jpg'],
      "강원FC": ['15,000원', '20 백구 5호', 'https://shop-phinf.pstatic.net/20200330_17/1585530166494rJYXU_JPEG/22890905121125611_1882224483.jpg?type=f295_381'],
      "수원FC": ['2,500원', '수원FC 고무팔찌', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1685517201838_1000.png'],
      "수원삼성": ['28000원', '김주찬 ㄴㅅㄴㅅ 응원타올', 'http://www.bluewingsshop.com/shopimages/bluewings/0180040000012.jpg?1691385199']
    },
    {
      "": 9,
      "울산현대": ['', '김기희 K리그 200경기 기념 포스터 액자', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1687338560440_1000.jpg'],
      "포항스틸러스": ['35,000원', '2023 스틸러스 셰르파 담요', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/03/10/1000000183/1000000183_add2_08.png'],
      "광주FC": ['28,000원', '광주FC 고급 페넌트', 'https://shop-phinf.pstatic.net/20191128_78/1574920733185OtWKC_JPEG/12283066661133607_1929883781.JPG?type=f296_296'],
      "인천유나이티드": ['5,000원', '2021 골키퍼 원정 유니폼', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/05/19/1000000251/1000000251_add3_097.jpg'],
      "대구FC": ['119,000원', 'DAEGU FC 2023 GK HOME (AUTHENTIC)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934504332_1000.jpg'],
      "FC서울": ['55,000 원', '23 홈 유니폼 성인 하의', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023221439188_S.jpg'],

      "제주유나이티드": ['109,000원', '23 제주 UTD 홈 유니폼 상의(스폰서포함)', 'https://www.jeju-utd.com/uploadfile/shop_product/202351660814_B.jpg'],
      "강원FC": ['15,000원', '20 타올머플러2(타올재질)', 'https://shop-phinf.pstatic.net/20200309_92/15837298453626DG2o_JPEG/21089679895052176_364136206.jpg?type=f295_381'],
      "수원FC": ['20,000원', '20주년 전사 머플러 (레드블루)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1685517167874_1000.png'],
      "수원삼성": ['28000원', '23 브랜딩 니트머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180010000172.jpg?1679307585']
    },
    {
      "": 10,
      "울산현대": ['11,000원', '김기희 K리그 200경기 기념 전사머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1687336651799_1000.jpg'],
      "포항스틸러스": ['8,000원', '2023 스틸러스 아크릴 마그넷', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000242/1000000242_add2_034.png'],
      "인천유나이티드": ['5,000원', '2021 홈 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/02/06/1000000221/1000000221_add3_021.jpg'],
      "대구FC": ['119,000원', 'DAEGU FC 2023 GK AWAY (AUTHENTIC)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934862558_1000.jpg'],
      "FC서울": ['20,000 원', '23 팔 스폰서 (어웨이)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202315421311_S.jpg'],
      "제주유나이티드": ['3,000원', '23 SK그룹 ESG로고 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516612469_B.jpg'],
      "강원FC": ['25,000원', '2018 강원FC 패넌트', 'https://shop-phinf.pstatic.net/20180125_80/gangwonfc_1516853681465oH8ay_PNG/73224086362487_1232896823.png?type=f295_381'],
      "수원FC": ['20,000원', '슈니 전사 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1684387358835_1000.png'],
      "수원삼성": ['28000원', '23 수원시티 니트머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180010000162.jpg?1679312243']
    },
    {
      "": 11,
      "울산현대": ['22,000원', '울산현대 23-24 ACL 홈 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1686554161613_1000.jpg'],
      "포항스틸러스": ['8,000원', '2023 스틸야드 아크릴 마그넷', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000241/1000000241_add2_05.png'],
      "인천유나이티드": ['5,000원', '2021 원정 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/02/06/1000000222/1000000222_add3_080.jpg'],
      "대구FC": ['89,000원', 'DAEGU FC 2023 HOME (REPLICA)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675933742352_1000.jpg'],
      "FC서울": ['20,000 원', '23 팔 스폰서 (그린)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231542245_S.jpg'],
      "제주유나이티드": ['10,000원', '이창민 200경기 기념 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516820683_B.jpg'],
      "수원FC": ['12,000원', '23 플레이어 응원타올', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1684982052445_1000.png'],
      "수원삼성": ['28000원', '23 청백적 니트머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180010000182.jpg?1679312400']
    },
    {
      "": 12,
      "울산현대": ['130,000원', '23 올웨더자켓 (블랙)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1686554204162_1000.jpg'],
      "포항스틸러스": ['23,000원', '2023 스틸러스 타올머플러 (검빨)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/34/1000000230/1000000230_add2_035.png'],
      "인천유나이티드": ['72,000원', '2021 골키퍼 유니폼 마킹 세트(상세페이지 배송 공지 필수 확인)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/02/06/1000000223/1000000223_add3_060.jpg'],
      "대구FC": ['89,000원', 'DAEGU FC 2023 AWAY (REPLICA)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934372402_1000.jpg'],
      "FC서울": ['20,000 원', '22 엑스포 패치 [세트]', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20227118165_S.jpg'],
      "제주유나이티드": ['10,000원', '23 제주UTD 마킹(등번호+이름)', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516615554_B.jpg'],
      "수원FC": ['33,000원', '수원FC 반팔 카라티', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683779280794_1000.jpg'],
      "수원삼성": ['28000원', '23 날개 니트머플러', 'http://www.bluewingsshop.com/shopimages/bluewings/0180010000192.jpg?1679312573']
    },
    {
      "": 13,
      "울산현대": ['139,000원', '바코 100경기 기념 아크릴 미니 스태츄', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1686554230471_1000.jpg'],
      "포항스틸러스": ['23,000원', '2023 스틸러스 타올머플러 (스틸야드)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/34/1000000229/1000000229_add2_088.png'],
      "인천유나이티드": ['72,000원', '2021 유니폼 셀트리온 마킹', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/04/17/1000000249/1000000249_add3_085.jpg'],
      "대구FC": ['89,000원', 'DAEGU FC 2023 GK HOME (REPLICA)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934387278_1000.jpg'],
      "FC서울": ['20,000 원', '23 팔 스폰서 (블루)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202315422951_S.jpg'],
      "제주유나이티드": ['13,000원', '제주 응원봉(LED)', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516718545_B.jpg'],
      "수원FC": ['35,000원', '슈니 반팔 티셔츠', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683771892416_1000.png'],
    },
    {
      "": 14,
      "울산현대": ['15,000원', '[울산현대 X 스코브 안데르센] 40주년 기념 시계', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1686554255954_1000.jpg'],
      "포항스틸러스": ['99,000원', '2023 스틸러스 ACL 홈 유니폼 (노마킹)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000240/1000000240_add2_027.png'],
      "인천유나이티드": ['299,000원', 'IUFC SQUARE 93L/24’’', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/12/50/1000000504/1000000504_add3_096.png'],
      "대구FC": ['89,000원', 'DAEGU FC 2023 GK AWAY (REPLICA)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1675934430585_1000.jpg'],
      "FC서울": ['20,000 원', '23 팔 스폰서 (홈)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202315421730_S.jpg'],
      "제주유나이티드": ['13,000원', '23 K리그1(40주년) 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/202351661836_B.jpg'],
      "수원FC": ['8,000원', '슈니 아크릴 스마트톡', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683765486982_1000.png'],
    },
    {
      "": 15,
      "울산현대": ['400,000원', '문수경기장 3D 입체 퍼즐', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1686554303440_1000.jpg'],
      "포항스틸러스": ['99,000원', '2023 스틸러스 ACL 원정 유니폼 (노마킹)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000239/1000000239_add2_036.png'],
      "인천유나이티드": ['33,000원', 'IUFC 크로스백', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/11/48/1000000498/1000000498_add3_019.png'],
      "대구FC": ['62,300원', 'DAEGU FC 2022 HOME KIT FOR K LEAGUE (REPLICA)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1644224181009_1000.jpg'],
      "FC서울": ['15,000 원', '23 LED 짝짝이', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202391841011_S.jpeg'],
      "제주유나이티드": ['12,000원', '최강제주 타올', 'https://www.jeju-utd.com/uploadfile/shop_product/2023723410175_B.jpg'],
      "수원FC": ['4,500원', '슈니 스티커 5종 세트', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683765390047_1000.png'],
    },
    {
      "": 16,
      "울산현대": ['36,000원', '23 미타 후드 인형', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1685513734738_1000.jpg'],
      "포항스틸러스": ['22,000원', '2023 스틸러스 ACL 마킹', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000237/1000000237_add2_08.png'],
      "인천유나이티드": ['60,000원', '포토카드북', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/11/48/1000000497/1000000497_add3_042.png'],
      "대구FC": ['30,000원', '대구FC 바라클라바', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1694764564679_1000.png'],
      "FC서울": ['21,000 원', '23 레트로 전사머플러', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202373111427_S.jpg'],
      "제주유나이티드": ['13,000원', '21-22 K리그 1 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516648815_B.jpg'],
      "수원FC": ['8,000원', '슈니 아크릴 키링', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683765305633_1000.png'],
    },
    {
      "": 17,
      "울산현대": ['26,000원', '콘디보22 하프집업 (네이비)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1685513687250_1000.jpg'],
      "포항스틸러스": ['15,000원', '2023 ACL 패치', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/09/38/1000000236/1000000236_add2_010.png'],
      "인천유나이티드": ['43,000원', '무릎담요(대형)', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/11/48/1000000495/1000000495_add3_017.png'],
      "대구FC": ['18,000원', '대구FC 다회용 우의 (아동용)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1694763779640_1000.jpg'],
      "FC서울": ['13,000 원', '23 40주년 기념 극세사 머플러', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202352924803_S.jpg'],
      "제주유나이티드": ['5,000원', '제주 스마트폰 그립톡', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516722372_B.jpg'],
      "수원FC": ['20,000원', '수원FC 위민 23 사인볼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683769982346_1000.png'],
    },
    {
      "": 18,
      "울산현대": ['63,000원', '콘디보22 하프집업 (블루)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1678085174843_1000.jpg'],
      "포항스틸러스": ['18,000원', '고영준 100경기 기념 응원타올', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/33/1000000228/1000000228_add2_021.png'],
      "인천유나이티드": ['30,000원', 'IUFC 버킷햇', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/11/48/1000000496/1000000496_add3_034.png'],
      "대구FC": ['46,000원', '[EPLC X DAEGU FC] 대구티셔츠', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1693193465981_1000.jpg'],
      "FC서울": ['23,000 원', '23 40주년 기념 머플러', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202327548205_S.jpg'],
      "제주유나이티드": ['12,000원', '2020년 K리그2 패치', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516822572_B.jpg'],
      "수원FC": ['80,000원', '★2023 수원FC HOME 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677835040840_1000.png'],
    },
    {
      "": 19,
      "울산현대": ['99,000원', '23 미타 튜브 인형 키링 (썸머 스페셜)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1677835928740_1000.jpg'],
      "포항스틸러스": ['5,000원', '고영준 100경기 기념 열부착 패치', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/33/1000000227/1000000227_add2_074.png'],
      "인천유나이티드": ['10,000원', '2023 ACL 캐리어 스티커', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/10/40/1000000485/1000000485_add3_026.png'],
      "대구FC": ['6,000원', '마스코트 왕부채 2종', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1689403831774_1000.jpg'],
      "FC서울": ['23,000 원', '22. FC서울 Soul of Seoul 니트머플러', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2022814548769_S.jpg'],
      "제주유나이티드": ['5,000원', '23 제주 유니폼 키링', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516724530_B.jpg'],
      "수원FC": ['80,000원', '★2023 수원FC AWAY 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677835052215_1000.png'],
    },
    {
      "": 20,
      "울산현대": ['63,000원', '설영우 100경기 출전기념 엽서 4종', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1678094207370_1000.jpg'],
      "포항스틸러스": ['9,000원', '스틸러스 반다나', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/33/1000000226/1000000226_add2_058.png'],
      "인천유나이티드": ['23,000원', '인천유나이티드 3단 자동 우산', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/09/36/1000000480/1000000480_add3_091.png'],
      "대구FC": ['25,000원', '대구FC 23시즌 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684836153744_1000.png'],
      "FC서울": ['23,000 원', '22. FC서울 WHITE 니트머플러', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2022814549652_S.jpg'],
      "제주유나이티드": ['3,000원', '제주 메탈 스티커', 'https://www.jeju-utd.com/uploadfile/shop_product/202351672571_B.jpg'],
      "수원FC": ['80,000원', '★2023 수원FC GK HOME 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677835061808_1000.png'],
    },
    {
      "": 21,
      "울산현대": ['99,000원', '23 피크닉 보냉백', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1678094339456_1000.jpg'],
      "포항스틸러스": ['3,000원', '쇠돌이 견출지 스티커', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/08/33/1000000225/1000000225_add2_02.png'],
      "인천유나이티드": ['28,000원', '인천유나이티드 장우산', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/10/40/1000000390/1000000390_add3_073.jpg'],
      "대구FC": ['25,000원', '대구FC 국제선 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684835232964_1000.png'],
      "FC서울": ['3,000 원', 'FC서울 벌룬', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202323112421_S.jpg'],
      "제주유나이티드": ['2,000원', '제주 리무버블 스티커', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516726589_B.jpg'],
      "수원FC": ['80,000원', '★2023 수원FC GK AWAY 레플리카 유니폼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677835069346_1000.png'],
    },
    {
      "": 22,
      "울산현대": ['13,000원', '23 볼캡 6호 (UHFC 블루)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1677835262056_1000.jpg'],
      "포항스틸러스": ['55,000원', '50주년 로고 티셔츠', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/30/1000000224/1000000224_add2_063.png'],
      "인천유나이티드": ['38,000원', '창단 20주년 기념 연보 「인천 : OUR CITY, OUR UNITED」', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/09/36/1000000479/1000000479_add3_075.png'],
      "대구FC": ['36,000원', '리카 피크닉 매트', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453584038_1000.jpg'],
      "FC서울": ['5,000 원', 'FC서울 엠블럼 마스크', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231111639361_S.jpg'],
      "제주유나이티드": ['5,000원', '4.3 네임택', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516728502_B.jpg'],
      "수원FC": ['13,000원', '2023 K리그 패치', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1676260756085_1000.jpg'],
    },
    {
      "": 23,
      "울산현대": ['2,000원', '23 볼캡 5호 (UHFC 써클)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1669192813565_1000.jpg'],
      "포항스틸러스": ['3,000원', '엠블럼 홀로그램 스티커', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/30/1000000223/1000000223_add2_06.png'],
      "인천유나이티드": ['17,000원', 'IUFC 큐브', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/08/34/1000000473/1000000473_add3_077.png'],
      "대구FC": ['9,000원', '빅토 리카 지비츠 세트', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453383324_1000.jpg'],
      "FC서울": ['5,000 원', 'FC서울 황소마스크', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231111642365_S.jpg'],
      "제주유나이티드": ['25,000원', '제주 UTD 비치타올 웨이브(하늘색)', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516729488_B.jpg'],
      "수원FC": ['20,000원', '수원FC 20주년 전사머플러 (블루골드)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1678425038432_1000.png'],
    },
    {
      "": 24,
      "울산현대": ['14,000원', '23 볼캡 4호 (UHFC 1983)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1669687251752_1000.jpg'],
      "포항스틸러스": ['18,000원', '김승대 200경기 기념 응원타올', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000222/1000000222_add2_099.png'],
      "인천유나이티드": ['18,000원', '여권 케이스 네임택 세트', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/08/34/1000000472/1000000472_add3_081.png'],
      "대구FC": ['25,000원', '스카이블루 원터치 텀블러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453233645_1000.jpg'],
      "FC서울": ['6,000 원', '차량용스티커 (아기가 타고 있어요)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023111122627_S.jpg'],
      "제주유나이티드": ['25,000원', '제주 UTD 비치타올 포레스트(오렌지)', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516730117_B.jpg'],
      "수원FC": ['25,000원', '수원FC 23 홈 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677830440874_1000.png'],
    },
    {
      "": 25,
      "울산현대": ['20,000원', '23 피크닉매트 (엠블럼)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1669689148575_1000.jpg'],
      "포항스틸러스": ['18,000원', '2023 여권 케이스', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000221/1000000221_add2_095.png'],
      "인천유나이티드": ['18,000원', '에어팟 프로2 범퍼케이스', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/30/1000000466/1000000466_add3_031.png'],
      "대구FC": ['18,000원', '아이보리 스텐 텀블러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453151030_1000.jpg'],
      "FC서울": ['17,500 원', '17 블랙 벽시계', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231111219192_S.jpg'],
      "제주유나이티드": ['5,000원', '21 제주 UTD 마스크스트랩', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516731783_B.jpg'],
      "수원FC": ['20,000원', '수원FC 23 사인볼', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677832721505_1000.png'],
    },
    {
      "": 26,
      "울산현대": ['35,000원', '23 피크닉매트 (미타)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1669687403859_1000.jpg'],
      "포항스틸러스": ['18,000원', '2023 에어팟 프로 케이스', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000220/1000000220_add2_04.png'],
      "인천유나이티드": ['18,000원', '에어팟3 범퍼케이스', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/30/1000000465/1000000465_add3_091.png'],
      "대구FC": ['8,000원', '대구FC 아크릴 스마트톡', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1686984859591_1000.jpg'],
      "FC서울": ['3,500 원', '황소 레트로 L홀더', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231111218294_S.jpg'],
      "제주유나이티드": ['5,000원', '21 제주 UTD 마스크(블랙/화이트)', 'https://www.jeju-utd.com/uploadfile/shop_product/2023516734393_B.jpg'],
      "수원FC": ['7,000원', '수원FC 20주년 엠블럼 뱃지', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677830753251_1000.png'],
    },
    {
      "": 27,
      "울산현대": ['35,000원', 'UHFC 핸드선풍기', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1693376748476_1000.jpg'],
      "포항스틸러스": ['18,000원', '2023 에어팟2 케이스', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000219/1000000219_add2_024.png'],
      "인천유나이티드": ['20,000원', '인천유나이티드 우비', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/29/1000000463/1000000463_add3_04.png'],
      "대구FC": ['25,000원', '대구FC 바시티 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684835175756_1000.png'],
      "FC서울": ['6,000 원', '23 황소 뱃지', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202311414136_S.jpg'],
      "제주유나이티드": ['8,000원', '제주 UTD 앰블럼 뱃지', 'https://www.jeju-utd.com/uploadfile/shop_product/202351671131_B.jpg'],
      "수원FC": ['8,000원', '수원FC 20주년 아크릴 키링', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1683682105034_1000.png'],
    },
    {
      "": 28,
      "울산현대": ['35,000원', '23 응원타올 (UHFC)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1689230377265_1000.jpg'],
      "포항스틸러스": ['18,000원', '2023 버즈 라이브 케이스', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000218/1000000218_add2_077.png'],
      "인천유나이티드": ['18,000원', '유티 머리띠', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/27/1000000456/1000000456_add3_077.png'],
      "대구FC": ['22,000원', '대구FC 다회용 우의 (성인용)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1686105842982_1000.png'],
      "FC서울": ['21,000 원', '23 FC서울 포토카드 바인더', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202386245492_S.jpg'],
      "수원FC": ['2,000원', '수원FC 20주년 엠블럼 리무버블 스티커', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677831332985_1000.png'],
    },
    {
      "": 29,
      "울산현대": ['19,000원', '23 응원타올 (별이 되어)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1677834743034_1000.jpg'],
      "포항스틸러스": ['49,000원', '2023 스틸러스 트레이닝 쇼트', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/29/1000000217/1000000217_add2_081.png'],
      "인천유나이티드": ['15,000원', '리본 머리띠 컬러', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/27/1000000455/1000000455_add3_071.png'],
      "대구FC": ['12,000원', '23시즌 플레이어 응원타올', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1680228993351_1000.jpg'],
      "FC서울": ['3,000 원', '23 FC서울 포토카드 바인더 속지 (10장)', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20238261041378_S.jpg'],
      "수원FC": ['22,000원', '수원FC 무릎담요', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1678177014130_1000.png'],
    },
    {
      "": 30,
      "울산현대": ['26,000원', '23 미타 파우치', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1678156266238_1000.jpg'],
      "포항스틸러스": ['49,000원', '2023 스틸러스 트레이닝저지 (레드)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/27/1000000216/1000000216_add2_080.png'],
      "인천유나이티드": ['15,000원', '리본 머리띠 블루', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/07/27/1000000454/1000000454_add3_048.png'],
      "대구FC": ['25,000원', '대구FC 와펜 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453977461_1000.jpg'],
      "FC서울": ['3,000 원', '23 FC서울 고무팔찌', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202386214915_S.jpg'],
      "수원FC": ['15,000원', '수원FC 무선 이어폰 케이스', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677839099894_1000.png'],
    },
    {
      "": 31,
      "울산현대": ['26,000원', '23 여권지갑 (미타)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1677834998537_1000.jpg'],
      "포항스틸러스": ['49,000원', '2023 스틸러스 트레이닝저지 (그레이)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/27/1000000215/1000000215_add2_028.png'],
      "인천유나이티드": ['7,000원', '인천유나이티드 배지 블랙', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/05/18/1000000433/1000000433_add3_044.png'],
      "대구FC": ['12,000원', '대구FC 구단버스 메탈 키링', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684834186794_1000.png'],
      "FC서울": ['10,000 원', '23 황소 주차번호판', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023722320423_S.jpg'],
      "수원FC": ['19,000원', '수원FC 23시즌 유니폼 폰케이스', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677839992897_1000.png'],
    },
    {
      "": 32,
      "울산현대": ['11,000원', '23 손목아대 (미타)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/70311/product/image_1677835309390_1000.jpg'],
      "포항스틸러스": ['49,000원', '2023 스틸러스 트레이닝저지 (블랙)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/07/27/1000000214/1000000214_add2_094.png'],
      "인천유나이티드": ['6,500원', '인천유나이티드 배지', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/20/02/09/1000000181/1000000181_add3_016.png'],
      "대구FC": ['35,000원', '크리스마스 빅토&리카 담요 2종', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1702880795754_1000.jpg'],
      "FC서울": ['2,000 원', '23 황소 부채', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202372005794_S.jpg'],
      "수원FC": ['8,000원', '수원FC 홈 유니폼 스마트톡', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677830997353_1000.png'],
    },
    {
      "": 33,
      "포항스틸러스": ['49,000원', '2023 스틸러스 폴로티 (화이트)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/25/1000000212/1000000212_add2_045.png'],
      "인천유나이티드": ['29,000원', '인천유나이티드 라운드 페넌트', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/03/10/1000000415/1000000415_add3_03.png'],
      "대구FC": ['25,000원', '대구FC 23시즌 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684836153744_1000.png'],
      "FC서울": ['3,000 원', '23 FC서울 나쵸', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202361706504_S.jpg'],
      "수원FC": ['2,000원', '수원FC 20주년 유니폼 리무버블 스티커', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1677831903561_1000.png'],
    },
    {
      "": 34,
      "포항스틸러스": ['49,000원', '2023 스틸러스 폴로티 (네이비)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/25/1000000211/1000000211_add2_086.png'],
      "인천유나이티드": ['29,000원', '인천유나이티드 페넌트', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/23/03/10/1000000414/1000000414_add3_036.png'],
      "대구FC": ['25,000원', '대구FC 국제선 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684835232964_1000.png'],
      "FC서울": ['8,000 원', '23 40주년 유니폼 키링', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202311412790_S.jpg'],
      "수원FC": ['5,000원', '수원FC 엠블럼 뱃지', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1595322102975_1000.jpg'],
    },
    {
      "": 35,
      "포항스틸러스": ['79,000원', '2023 스틸러스 트레이닝 팬츠 (블랙)', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/25/1000000213/1000000213_add2_076.png'],
      "인천유나이티드": ['10,000원', '인천유나이티드 스마트톡', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/08/33/1000000388/1000000388_add3_073.jpg'],
      "대구FC": ['25,000원', '대구FC 바시티 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1684835175756_1000.png'],
      "FC서울": ['6,000 원', '23 FC서울 응원 깃발', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/202341878191_S.jpg'],
      "수원FC": ['12,000원', '수원FC 엠블럼 메탈 키링', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1650609402561_1000.jpg'],
    },
    {
      "": 36,
      "포항스틸러스": ['99,000원', '2023 스틸러스 레인자켓', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/23/1000000210/1000000210_add2_070.png'],
      "인천유나이티드": ['7,000원', '인천유나이티드 엠블럼 열쇠고리', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/06/26/1000000383/1000000383_add3_053.jpg'],
      "대구FC": ['25,000원', '대구FC 슬로건 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1647931659249_1000.jpg'],
      "FC서울": ['10,500 원', '23 골드사인볼', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/20231015230311_S.jpg'],
      "수원FC": ['2,000원', "'우리승우' L홀더", 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1660104891745_1000.png'],
    },
    {
      "": 37,
      "포항스틸러스": ['18,000원', '017 레트로 전사 머플러', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/23/1000000209/1000000209_add2_06.png'],
      "인천유나이티드": ['29,000원', '마스코트 유티 인형', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/22/02/08/1000000356/1000000356_add3_06.jpg'],
      "대구FC": ['12,000원', '23시즌 플레이어 응원타올', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1680228993351_1000.jpg'],
      "FC서울": ['27,000 원', '23 FC서울 장우산', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023418713775_S.jpg'],
      "수원FC": ['15,000원', "'우리승우' 캐릭터 젤리 휴대폰 케이스 (※다기종 가능※)", 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1660104983102_1000.png'],
    },
    {
      "": 38,
      "포항스틸러스": ['18,000원', '쇠돌이 레트로 전사 머플러', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/23/1000000208/1000000208_add2_086.png'],
      "인천유나이티드": ['15,000원', '인천유나이티드 에어팟 프로 투명 케이스', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/06/23/1000000262/1000000262_add3_073.jpg'],
      "대구FC": ['25,000원', '대구FC 와펜 머플러', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1688453977461_1000.jpg'],
      "FC서울": ['28,000 원', '23 FC서울 레디백', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023330711645_S.jpg'],
      "수원FC": ['25,000원', "'우리승우' 캐릭터 휴대폰 샌드 케이스 (※다기종 가능※)", 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1660105033842_1000.png'],
    },
    {
      "": 39,
      "포항스틸러스": ['8,000원', '50주년 유니폼 키링', 'https://cdn-pro-web-210-60.cdn-nhncommerce.com/difkorea4_godomall_com/data/goods/23/06/23/1000000206/1000000206_add2_05.png'],
      "인천유나이티드": ['15,000원', '인천유나이티드 에어팟 투명 케이스', 'https://cdn-pro-web-220-151.cdn-nhncommerce.com/company032_godomall_com/data/goods/21/06/23/1000000261/1000000261_add3_076.jpg'],
      "대구FC": ['13,000원', '리카 머리띠', 'https://contents.sixshop.com/thumbnails/uploadedFiles/112048/product/image_1660797424509_1000.jpg'],
      "FC서울": ['16,000 원', '23 40주년 백구', 'https://files.fcseoul.com/multi01/SHOP/Product/Product/2023313621170_S.jpg'],
      "수원FC": ['6,000원', '수원FC 유니폼 종이 방향제(양면)', 'https://contents.sixshop.com/thumbnails/uploadedFiles/130623/product/image_1656471510438_1000.jpg'],
    }
  ]

  export const kleage_goods_map: GoodsData[] = []

  const goods_ulsan = kleage_goods.map(data => data.울산현대)
  const goods_pohang = kleage_goods.map(data => data.포항스틸러스)
  const goods_gw = kleage_goods.map(data => data.광주FC)
  const goods_incheon = kleage_goods.map(data => data.인천유나이티드)
  const goods_daegu = kleage_goods.map(data => data.대구FC)
  const goods_seoul = kleage_goods.map(data => data.FC서울)
  const goods_daejeon = kleage_goods.map(data => data.대전하나시티즌)
  const goods_jeju = kleage_goods.map(data => data.제주유나이티드)
  const goods_gangwon = kleage_goods.map(data => data.강원FC)
  const goods_suwon = kleage_goods.map(data => data.수원FC)
  const goods_ss = kleage_goods.map(data => data.수원삼성)

  goods_ulsan.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '울산',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_pohang.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '포항',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_gw.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '광주',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_incheon.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '인천',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_daegu.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '대구',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_seoul.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '서울',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_daejeon.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '대전',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_jeju.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '제주',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_gangwon.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '강원',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_suwon.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '수원FC',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })
  goods_ss.map(data => {
    if(!data) return
    const goods: GoodsData = {
        team: '수원삼성',
        goodsPrice: data[0],
        goodsName: data[1],
        goodsImg: data[2]
    }
    kleage_goods_map.push(goods)
  })