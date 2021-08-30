import axios from "axios";
import { IMember2 } from "../../types/imember2";

// Member 정보
const MEMBER_API_URL = "http://localhost:4000/contacts";

/*********** Member 정보 API_URL *************/ 
// Member 정보 조회
export const getContactList = async () => {
  let list = await axios.get(MEMBER_API_URL, {
    params: {},
  });
  return list.data;
};

// 검색 Member 조회
export const getSeacrchList = async (keyword: string) => {
  let slist = await axios.get(MEMBER_API_URL + "/" + keyword);
  return slist.data;
};

// Member 추가
export const addContact = async (member: IMember2) => {
  await axios.post(MEMBER_API_URL, member);
};

// Member 정보 수정
export const updateContact = async (member: IMember2) => {
  await axios.patch(MEMBER_API_URL, member);
};

export const deleteContact = async (id: number) => {
  await axios.patch(MEMBER_API_URL + "/" + id)
};