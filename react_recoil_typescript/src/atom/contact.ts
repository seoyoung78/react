import { atom } from "recoil";
import members from '../data/members';

export const memberListState = atom<any[]>({
  key: 'memberList',
  default: members
});

export const memberIdState = atom<number>({
  key: 'memberId',
  default: 6
});

export const keywordState = atom<string>({
  key: 'keyword',
  default: ''
});

export const memberState = atom<{}>({
  key: 'member',
  default: {
    name : '',
    departmemt: '',
    tel: '',
    email: ''
  }
});