import { MatchData } from '@/components/sports/types'

const kbo_matches = [
    {
      "": 0,
      matchDate: "10월 1일 (일)",
      matchTime: ['14:00', '14:00', '14:00', '14:00', '14:00'],
      matchPlace: ['문학', '잠실', '대전', '사직', '수원'],
      matchTeams: ['KIA', 'SSG', 'LG twins', '두산', 'NC', '한화', '삼성', '롯데', '키움', 'KT wiz'],
      matchResult: [
        5,
        6,
        7,
        4,
        3,
        4,
        5,
        8,
        3,
        6
      ]
    },
    {
      "": 1,
      matchDate: "10월 2일 (월)",
      matchTime: ['14:00', '14:00', '14:00', '14:00', '18:04'],
      matchPlace: ['수원', '대전', '사직', '잠실', '사직'],
      matchTeams: ['LG twins', 'KT wiz', 'NC', '한화', '삼성', '롯데', '키움', '두산', '삼성', '롯데'],
      matchResult: [
        5,
        4,
        0,
        10,
        9,
        8,
        2,
        7,
        8,
        6
      ]
    },
    {
      "": 2,
      matchDate: "10월 3일 (화)",
      matchTime: ['14:00', '14:00', '14:00', '14:00'],
      matchPlace: ['수원', '문학', '사직', '잠실'],
      matchTeams: ['KIA', 'KT wiz', 'NC', 'SSG', '삼성', '롯데', '키움', '두산'],
      matchResult: [
        3,
        1,
        7,
        9,
        4,
        10,
        6,
        5
      ]
    },
    {
      "": 3,
      matchDate: "10월 4일 (수)",
      matchTime: ['15:00', '18:30', '18:30', '18:30', '18:37'],
      matchPlace: ['수원', '대구', '사직', '문학', '수원'],
      matchTeams: ['KIA', 'KT wiz', '한화', '삼성', 'LG twins', '롯데', 'NC', 'SSG', 'KIA', 'KT wiz'],
      matchResult: [
        10,
        2,
        11,
        7,
        7,
        8,
        5,
        10,
        2,
        3
      ]
    },
    {
      "": 4,
      matchDate: "10월 5일 (목)",
      matchTime: ['18:30', '18:30', '18:30', '18:30'],
      matchPlace: ['대구', '수원', '사직', '문학'],
      matchTeams: ['한화', '삼성', 'KIA', 'KT wiz', 'LG twins', '롯데', 'NC', 'SSG'],
      matchResult: [
        1,
        3,
        3,
        5,
        5,
        3,
        3,
        4
      ]
    },
    {
      "": 5,
      matchDate: "10월 6일 (금)",
      matchTime: ['18:30', '18:30', '18:30'],
      matchPlace: ['문학', '잠실', '수원'],
      matchTeams: ['한화', 'SSG', 'KIA', 'LG twins', '삼성', 'KT wiz'],
      matchResult: [
        2,
        7,
        3,
        2,
        6,
        2
      ]
    },
    {
      "": 6,
      matchDate: "10월 7일 (토)",
      matchTime: ['17:00', '17:00', '17:00', '17:00'],
      matchPlace: ['수원', '고척', '잠실', '창원'],
      matchTeams: ['한화', 'KT wiz', 'LG twins', '키움', '롯데', '두산', 'SSG', 'NC'],
      matchResult: [
        0,
        17,
        1,
        7,
        6,
        3,
        2,
        3
      ]
    },
    {
      "": 7,
      matchDate: "10월 8일 (일)",
      matchTime: ['14:00', '14:00', '14:00', '14:00'],
      matchPlace: ['수원', '잠실', '창원', '광주'],
      matchTeams: ['한화', 'KT wiz', '롯데', '두산', 'SSG', 'NC', '삼성', 'KIA'],
      matchResult: [
        2,
        9,
        1,
        2,
        10,
        8,
        1,
        2
      ]
    },
    {
      "": 8,
      matchDate: "10월 9일 (월)",
      matchTime: ['14:00', '14:00', '14:00'],
      matchPlace: ['창원', '잠실', '광주'],
      matchTeams: ['한화', 'NC', '롯데', 'LG twins', '삼성', 'KIA'],
      matchResult: [
        6,
        11,
        8,
        1,
        1,
        3
      ]
    },
    {
      "": 9,
      matchDate: "10월 10일 (화)",
      matchTime: ['18:30', '18:30', '18:30', '18:30', '18:30'],
      matchPlace: ['창원', '잠실', '수원', '광주', '고척'],
      matchTeams: ['한화', 'NC', '롯데', 'LG twins', '두산', 'KT wiz', 'SSG', 'KIA', '삼성', '키움'],
      matchResult: [
        0,
        2,
        0,
        7,
        4,
        5,
        6,
        5,
        3,
        5
      ]
    },
    {
      "": 10,
      matchDate: "10월 11일 (수)",
      matchTime: ['18:30', '18:30'],
      matchPlace: ['사직', '광주'],
      matchTeams: ['두산', '롯데', '키움', 'KIA'],
      matchResult: [
        3,
        14,
        0,
        11
      ]
    },
    {
      "": 11,
      matchDate: "10월 12일 (목)",
      matchTime: ['18:30', '18:30'],
      matchPlace: ['광주', '잠실'],
      matchTeams: ['롯데', 'KIA', 'NC', '두산'],
      matchResult: [
        5,
        6,
        1,
        11
      ]
    },
    {
      "": 12,
      matchDate: "10월 13일 (금)",
      matchTime: ['18:30', '18:30', '18:30'],
      matchPlace: ['잠실', '창원', '문학'],
      matchTeams: ['KIA', '두산', 'LG twins', 'NC', '키움', 'SSG'],
      matchResult: [
        1,
        3,
        4,
        8,
        2,
        3
      ]
    },
    {
      "": 13,
      matchDate: "10월 14일 (토)",
      matchTime: ['17:00', '17:00', '17:00'],
      matchPlace: ['대전', '잠실', '대구'],
      matchTeams: ['롯데', '한화', '두산', 'LG twins', 'SSG', '삼성'],
      matchResult: [
        0,
        8,
        3,
        2,
        3,
        5
      ]
    },
    {
      "": 14,
      matchDate: "10월 15일 (일)",
      matchTime: ['14:00', '14:00', '14:00'],
      matchPlace: ['대전', '잠실', '창원'],
      matchTeams: ['롯데', '한화', '두산', 'LG twins', '삼성', 'NC'],
      matchResult: [
        4,
        7,
        2,
        5,
        3,
        5
      ]
    },
    {
      "": 15,
      matchDate: "10월 16일 (월)",
      matchTime: ['18:30', '18:30', '18:30'],
      matchPlace: ['대전', '광주', '잠실'],
      matchTeams: ['롯데', '한화', 'NC', 'KIA', 'SSG', '두산'],
      matchResult: [
        7,
        2,
        2,
        4,
        3,
        2
      ]
    },
    {
      "": 16,
      matchDate: "10월 17일 (화)",
      matchTime: ['18:30', '18:30'],
      matchPlace: ['광주', '문학'],
      matchTeams: ['NC', 'KIA', '두산', 'SSG'],
      matchResult: [
        1,
        7,
        0,
        5
      ]
    },
    {
      "": 17,
      matchDate: "10월 19일 (목)",
      matchTime: ['18:30'],
      matchPlace: ['창원'],
      matchTeams: ['두산', 'NC'],
      matchResult: [
        9,
        14
      ]
    },
    {
      "": 18,
      matchDate: "10월 22일 (일)",
      matchTime: ['14:00'],
      matchPlace: ['문학'],
      matchTeams: ['NC', 'SSG'],
      matchResult: [
        4,
        3
      ]
    },
    {
      "": 19,
      matchDate: "10월 23일 (월)",
      matchTime: ['18:30'],
      matchPlace: ['문학'],
      matchTeams: ['NC', 'SSG'],
      matchResult: [
        7,
        3
      ]
    },
    {
      "": 20,
      matchDate: "10월 25일 (수)",
      matchTime: ['18:30'],
      matchPlace: ['창원'],
      matchTeams: ['SSG', 'NC'],
      matchResult: [
        6,
        7
      ]
    },
    {
      "": 21,
      matchDate: "10월 30일 (월)",
      matchTime: ['18:30'],
      matchPlace: ['수원'],
      matchTeams: ['NC', 'KT wiz'],
      matchResult: [
        9,
        5
      ]
    },
    {
      "": 22,
      matchDate: "10월 31일 (화)",
      matchTime: ['18:30'],
      matchPlace: ['수원'],
      matchTeams: ['NC', 'KT wiz'],
      matchResult: [
        3,
        2
      ]
    },
    {
      "": 23,
      matchDate: "11월 2일 (목)",
      matchTime: ['18:30'],
      matchPlace: ['창원'],
      matchTeams: ['KT wiz', 'NC'],
      matchResult: [
        3,
        0
      ]
    },
    {
      "": 24,
      matchDate: "11월 3일 (금)",
      matchTime: ['18:30'],
      matchPlace: ['창원'],
      matchTeams: ['KT wiz', 'NC'],
      matchResult: [
        11,
        2
      ]
    },
    {
      "": 25,
      matchDate: "11월 5일 (일)",
      matchTime: ['14:00'],
      matchPlace: ['수원'],
      matchTeams: ['NC', 'KT wiz'],
      matchResult: [
        2,
        3
      ]
    },
    {
      "": 26,
      matchDate: "11월 7일 (화)",
      matchTime: ['18:30'],
      matchPlace: ['잠실'],
      matchTeams: ['KT wiz', 'LG twins'],
      matchResult: [
        3,
        2
      ]
    },
    {
      "": 27,
      matchDate: "11월 8일 (수)",
      matchTime: ['18:30'],
      matchPlace: ['잠실'],
      matchTeams: ['KT wiz', 'LG twins'],
      matchResult: [
        4,
        5
      ]
    },
    {
      "": 28,
      matchDate: "11월 10일 (금)",
      matchTime: ['18:30'],
      matchPlace: ['수원'],
      matchTeams: ['LG twins', 'KT wiz'],
      matchResult: [
        8,
        7
      ]
    },
    {
      "": 29,
      matchDate: "11월 11일 (토)",
      matchTime: ['14:00'],
      matchPlace: ['수원'],
      matchTeams: ['LG twins', 'KT wiz'],
      matchResult: [
        15,
        4
      ]
    },
    {
      "": 30,
      matchDate: "11월 13일 (월)",
      matchTime: ['18:30'],
      matchPlace: ['잠실'],
      matchTeams: ['KT wiz', 'LG twins'],
      matchResult: [
        2,
        6
      ]
    }
  ]

  export const kbo_matches_map: MatchData[] = []
  kbo_matches.map(data => {
    data.matchTime.map((match, matchIndex) => {
        const input: MatchData = {
            matchDate: data.matchDate,
            matchTime: match,
            matchPlace: data.matchPlace[matchIndex],
            matchTeams: data.matchTeams.slice(matchIndex * 2, (matchIndex + 1) * 2)
        }
        kbo_matches_map.push(input)
    })
  })