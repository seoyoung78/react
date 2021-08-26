import { atom } from "recoil";
import members from './members';

// member 목록
export const memberListState = atom<any[]>({
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
export const searchListState = atom<any[]>({
  key: 'searchListState',
  default: members
});

// 개별 member
export const memberState = atom<{}>({
  key: 'memberState',
  default: {
    id: 0,
    name : '',
    departmemt: '',
    tel: '',
    email: ''
  }
});