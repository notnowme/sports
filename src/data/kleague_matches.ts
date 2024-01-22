import { MatchData } from '@/types/type'

const kleague_matches = [
    {
      "": 0,
      matchDate: "10월 1일 (일)",
      matchTime: ['14:00', '16:30'],
      matchPlace: ['강릉 종합 운동장', '제주 월드컵 경기장'],
      matchTeams: ['강원', '대전', '제주', '광주'],
      matchResult: [
        1,
        1,
        1,
        2
      ]
    },
    {
      "": 1,
      matchDate: "10월 8일 (일)",
      matchTime: ['15:00', '15:00', '15:00', '15:00', '15:00', '15:00'],
      matchPlace: ['울산 문수 경기장', '수원 월드컵 경기장', '서울 월드컵 경기장', '대전 월드컵 경기장', 'DGB 대구은행파크', '광주 축구 전용구장'],
      matchTeams: ['울산', '인천', '대구', '수원FC', '서울', '전북', '수원삼성', '포항', '광주', '강원', '대전', '제주'],
      matchResult: [
        0,
        0,
        1,
        0,
        0,
        2,
        1,
        0,
        2,
        2,
        1,
        0
      ]
    },
    {
      "": 2,
      matchDate: "10월 20일 (금)",
      matchTime: ['19:30'],
      matchPlace: ['포항 스틸야드'],
      matchTeams: ['포항', '인천'],
      matchResult: [
        1,
        1
      ]
    },
    {
      "": 3,
      matchDate: "10월 21일 (토)",
      matchTime: ['14:00', '16:30'],
      matchPlace: ['광주 축구 전용구장', 'DGB 대구은행파크'],
      matchTeams: ['광주', '울산', '대구', '전북'],
      matchResult: [
        1,
        0,
        1,
        2
      ]
    },
    {
      "": 4,
      matchDate: "10월 22일 (일)",
      matchTime: ['14:00', '14:00', '16:40'],
      matchPlace: ['제주 월드컵 경기장', '서울 월드컵 경기장', '대전 월드컵 경기장'],
      matchTeams: ['서울', '강원', '제주', '수원삼성', '대전', '수원FC'],
      matchResult: [
        2,
        0,
        2,
        1,
        1,
        1
      ]
    },
    {
      "": 5,
      matchDate: "10월 28일 (토)",
      matchTime: ['14:00', '16:30', '16:30'],
      matchPlace: ['전주 월드컵 경기장', '강릉 종합 운동장', '광주 축구 전용 구장'],
      matchTeams: ['전북', '포항', '광주', '인천', '강원', '제주'],
      matchResult: [
        1,
        1,
        1,
        1,
        0,
        2
      ]
    },
    {
      "": 6,
      matchDate: "10월 29일 (일)",
      matchTime: ['14:00', '14:00', '16:30'],
      matchPlace: ['울산 문수 경기장', '수원 월드컵 경기장', '수원 종합 운동장'],
      matchTeams: ['울산', '대구', '수원삼성', '대전', '수원FC', '서울'],
      matchResult: [
        2,
        0,
        2,
        2,
        3,
        4
      ]
    },
    {
      "": 7,
      matchDate: "11월 11일 (토)",
      matchTime: ['14:00', '16:30', '16:30'],
      matchPlace: ['대전 월드컵 경기장', '제주 월드컵 경기장', 'DGB 대구은행파크'],
      matchTeams: ['대전', '강원', '제주', '서울', '대구', '광주'],
      matchResult: [
        0,
        1,
        0,
        0,
        1,
        1
      ]
    },
    {
      "": 8,
      matchDate: "11월 12일 (일)",
      matchTime: ['14:00', '14:00', '16:30'],
      matchPlace: ['인천 축구 전용구장', '수원 종합 운동장', '울산 문수 경기장'],
      matchTeams: ['인천', '전북', '수원FC', '수원삼성', '울산', '포항'],
      matchResult: [
        1,
        1,
        2,
        3,
        3,
        2
      ]
    },
    {
      "": 9,
      matchDate: "11월 24일 (금)",
      matchTime: ['19:30'],
      matchPlace: ['인천 축구 전용구장'],
      matchTeams: ['인천', '울산'],
      matchResult: [
        3,
        1
      ]
    },
    {
      "": 10,
      matchDate: "11월 25일 (토)",
      matchTime: ['14:00', '14:00', '16:30', '16:30', '16:30'],
      matchPlace: ['제주 월드컵 경기장', '전주 월드컵 경기장', '포항 스틸야드', '서울 월드컵 경기장', '강릉종합 운동장'],
      matchTeams: ['제주', '대전', '전북', '광주', '포항', '대구', '서울', '수원삼성', '강원', '수원FC'],
      matchResult: [
        0,
        2,
        2,
        0,
        1,
        0,
        0,
        1,
        2,
        0
      ]
    },
    {
      "": 11,
      matchDate: "12월 2일 (토)",
      matchTime: ['14:00', '14:00', '14:00'],
      matchPlace: ['수원 월드컵 경기장', '대전 월드컵 경기장', '수원 종합 운동장'],
      matchTeams: ['수원삼성', '강원', '대전', '서울', '수원FC', '제주'],
      matchResult: [
        0,
        0,
        2,
        2,
        1,
        1
      ]
    },
    {
      "": 12,
      matchDate: "12월 3일 (일)",
      matchTime: ['14:00', '14:00', '14:00'],
      matchPlace: ['울산 문수 경기장', 'DGB 대구은행 파크', '광주 축구 전용 구장'],
      matchTeams: ['울산', '전북', '대구', '인천', '광주', '포항'],
      matchResult: [
        1,
        0,
        2,
        1,
        0,
        0
      ]
    },
    {
      "": 13,
      matchDate: "12월 6일 (수)",
      matchTime: ['19:00', '19:00'],
      matchPlace: ['부산 아시아드 경기장', '김포 솔터 축구장'],
      matchTeams: ['부산', '수원FC', '김포', '강원'],
      matchResult: [
        2,
        1,
        0,
        0
      ]
    },
    {
      "": 14,
      matchDate: "12월 9일 (토)",
      matchTime: ['14:00', '14:00'],
      matchPlace: ['강릉 종합 운동장', '수원 종합 운동장'],
      matchTeams: ['강원', '김포', '수원FC', '부산'],
      matchResult: [
        2,
        1,
        5,
        2
      ]
    }
  ]

  export const kleague_matches_map: MatchData[] =[]
  kleague_matches.map(data => {
    data.matchTime.map((match, matchIndex) => {
        const input: MatchData = {
            matchDate: data.matchDate,
            matchTime: match,
            matchPlace: data.matchPlace[matchIndex],
            matchTeams: data.matchTeams.slice(matchIndex * 2, (matchIndex + 1 ) * 2)
        }
        kleague_matches_map.push(input)
    })
  })