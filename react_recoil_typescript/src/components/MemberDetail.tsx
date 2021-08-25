import { useRecoilState } from "recoil";
import { memberIdState, memberState } from "../atoms/contact";

function MemberDetail() {
  // const [id, setId] = useRecoilState(memberIdState);
  // const [detail, setDetail] : any = useRecoilState(memberState);
  const id : any = useRecoilState(memberIdState);
  const detail : any = useRecoilState(memberState);

  return(
    <div className="details">
      {id[0] === 6?
        <div className="emptyset">
        정보가 없습니다.
      </div>
      :
        <div className="info"> 
          <ul>
            <li>이름: {detail[0].name}</li>
            <li>부서: {detail[0].department}</li>
            <li>휴대폰: {detail[0].tel}</li>
            <li>메일: {detail[0].email}</li>
          </ul>
        </div>
      }
    </div>
  );
}

export default MemberDetail