import { atom } from "recoil";
import members from '../data/members';

export const memberListState = atom<any[]>({
  key: 'memberListState',
  default: members
});

export const memberIdState = atom<number>({
  key: 'memberIdState',
  default: -1
});

export const keywordState = atom<string>({
  key: 'keywordState',
  default: ''
});

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