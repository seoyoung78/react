import { atom } from "recoil";
import members from './members';
import { IMember } from "../types/imembers";

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