import axios from "axios";

// Member 정보
const MEMBER_API_URL = "http://localhost:4000/contact";

/*********** Member 정보 API_URL *************/ 
// Member 정보 조회
export const getContactList = async () => {
  let list = await axios.get(MEMBER_API_URL, {
    params: {},
  });
  return list.data;
};