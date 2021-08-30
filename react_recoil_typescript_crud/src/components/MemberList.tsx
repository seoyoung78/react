import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { memberListState, memberIdState, memberState, memberList, memberDetail } from "../atoms/contact";
import { IMember } from "../types/imembers";
import { IMember2 } from "../types/imember2"
import { getContactList } from "../utils/api/ApiService";
import { useEffect } from "react";

function MemberList() {
  // member 목록을 저장하는 변수
  // const list = useRecoilValue<IMember[]>(memberListState)
  const [apiData, setApiData] = useRecoilState<IMember2[]>(memberList)
  // member의 id를 저장하는 변수
  const [id, setId] = useRecoilState<number>(memberIdState);
  // 클릭한 member의 상세 내역을 저장하는 변수
  // const setDetail = useSetRecoilState<IMember>(memberState);
  const setDetail = useSetRecoilState<IMember2>(memberDetail);

  // Database에서 목록 불러오기
  const select = async() => {
    let result = await getContactList();
    setApiData(result);
    return result;
  }

  // 클릭 시 member의 id와 detail 정의
  const handleClick = (mlist : IMember2) => {
    if (id !== mlist.id) {
      setId(mlist.id);
      setDetail({
        id: mlist.id,
        name: mlist.name,
        deptName: mlist.deptName,
        phone: mlist.phone,
        mail: mlist.mail
      });
    }
  };
  
  useEffect(() => {
    select();
  }, [])

  return (
    <div className="contact-list">
      <ul>
        {apiData.map((list => 
          <li key={list.id}>
            <button type="button" onClick={() => handleClick(list)}>{list.name}</button>
          </li>))}
      </ul>
    </div>
  );
}

export default MemberList;