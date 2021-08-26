import { useRecoilState, useSetRecoilState } from "recoil";
import { memberListState, memberIdState, memberState } from "../atoms/contact";

function MemberList() {
  // member 목록을 저장하는 변수
  const list = useRecoilState(memberListState)
  // member의 id를 저장하는 변수
  const [id, setId] = useRecoilState(memberIdState);
  // 클릭한 member의 상세 내역을 저장하는 변수
  const setDetail = useSetRecoilState(memberState);

  // 클릭 시 member의 id와 detail 정의
  const handleClick = (mlist : any) => {
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
        {list[0].map((list => 
          <li key={list.id}>
            <button type="button" onClick={() => handleClick(list)}>{list.name}</button>
          </li>))}
      </ul>
    </div>
  );
}

export default MemberList;