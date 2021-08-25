
import { useRecoilState } from "recoil";
import { memberListState, memberIdState, memberState } from "../atoms/contact";
import MemberForm from "./MemberForm";

function MemberDetail() {
  const [id, setId] = useRecoilState(memberIdState);
  // const [detail, setDetail] : any = useRecoilState(memberState);
  // const id : any = useRecoilState(memberIdState);
  const detail : any = useRecoilState(memberState);
  const [list, setList] = useRecoilState(memberListState);

  const handleDelete = (member : any) => {
    alert(member.name + "님을 삭제하였습니다.");
    setList(list.filter((list) => list.id !== member.id));
    setId(0);
  };

  const handleUpdate = () => {
    setId(0);
  }

  return(
    <div className="details">
      {id === -1?
        <div className="emptyset">
        정보가 없습니다.
      </div>
      :
        (id === 0?
          <MemberForm/>
          :
          <div className="info"> 
            <ul>
              <li>이름: {detail[0].name}</li>
              <li>부서: {detail[0].department}</li>
              <li>휴대폰: {detail[0].tel}</li>
              <li>메일: {detail[0].email}</li>
            </ul>
            <span>---------------------------------</span>
            <div className="btn-area">
              <button className="btn btn-del" onClick={() => handleDelete(detail[0])}>삭제</button>
              <button className="btn btn-upd" onClick={handleUpdate}>수정</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default MemberDetail