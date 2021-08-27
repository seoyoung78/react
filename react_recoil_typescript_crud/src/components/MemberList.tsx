import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { memberListState, memberIdState, memberState } from "../atoms/contact";
import { IMember } from "../types/imembers";

function MemberList() {
  // member 목록을 저장하는 변수
  const list = useRecoilValue<IMember[]>(memberListState)
  // member의 id를 저장하는 변수
  const [id, setId] = useRecoilState<number>(memberIdState);
  // 클릭한 member의 상세 내역을 저장하는 변수
  const setDetail = useSetRecoilState<IMember>(memberState);

  // 클릭 시 member의 id와 detail 정의
  const handleClick = (mlist : IMember) => {
    if (id !== mlist.id) {
      setId(mlist.id);
      setDetail({
        id: mlist.id,
        name: mlist.name,
        department: mlist.department,
        tel: mlist.tel,
        email: mlist.email
      });
    }
  };
  
  return (
    <div className="contact-list">
      <ul>
        {list.map((list => 
          <li key={list.id}>
            <button type="button" onClick={() => handleClick(list)}>{list.name}</button>
          </li>))}
      </ul>
    </div>
  );
}

export default MemberList;