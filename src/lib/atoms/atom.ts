import { atom } from 'recoil'
import { posObj, IObj } from '@/data/map_pos';

// 채팅창 열림/닫힘 상태를 전역으로 관리하는 게 나을 듯.
export const chatModal = atom({
    key: 'chatModalOpen',
    default: false
});

// 마커 위치 정보
export const mapPos = atom<IObj[]>({
    key: 'mapPosArray',
    default: posObj['kleague']
});