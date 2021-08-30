import { atom } from "recoil";
import members from './members';
import { IMember } from "../types/imembers";
import { IMember2 } from "../types/imember2";

// member 목록
export const memberListState = atom<IMember[]>({
  key: 'memberListState',
  default: members
});

// member의 id
export const memberIdState = atom<number>({
  key: 'memberIdState',
  default: 0
});

// 검색어
export const keywordState = atom<string>({
  key: 'keywordState',
  default: ''
});

// 검색 목록
export const searchListState = atom<IMember[]>({
  key: 'searchListState',
  default: members
});

// 개별 member
export const memberState = atom<IMember>({
  key: 'memberState',
  default: {
    id: 0,
    name : '',
    department: '',
    tel: '',
    email: ''
  }
});

/********************************* API **************************************/ 

// Member 정보 조회(Api)
export const memberList = atom<IMember2[]> ({
  key: 'memberList',
  default: [],
});

// Membaer 상세 정보 저장
export const memberDetail = atom<IMember2> ({
  key: 'memberDetail',
  default: {
    id: 0,
    name: '',
    deptName: '',
    phone: '',
    mail: ''
  }
});

// Member의 아이디 + 화면 전환을 위한 상태 저장
// export const idState = atom<number> ({
//   key: 'idState',
//   default: 0
// });

// // 검색어 저장
// export const searchState = atom<string> ({
//   key: 'searchState',
//   default: ''
// });

// 검색 목록 저장 상태
export const searchList = atom<IMember2[]> ({
  key: 'searchList',
  default: []
});