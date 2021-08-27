import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { memberListState, memberIdState, memberState, keywordState, searchListState } from "../atoms/contact";
import MemberForm from "./MemberForm";
import { deleteData } from "../atoms/members";
import { IMember } from "../types/imembers";

function MemberDetail() {
  // 상세 내역을 보여줄 member의 id 저장 변수
  const [id, setId] = useRecoilState<number>(memberIdState);
  // 해당 member의 상세내역
  const detail = useRecoilValue<IMember>(memberState);
  // member 목록 - 삭제 시 변동 필요
  const setList = useSetRecoilState<IMember[]>(memberListState);
  // 검색어 상태
  const resetKeyword = useResetRecoilState(keywordState);
  // 검색 목록 상태
  const setSearchLsit = useSetRecoilState<IMember[]>(searchListState);

  // 삭제 버튼 클릭 시
  const handleDelete = (member : IMember) => {
    alert(member.name + "님을 삭제하였습니다.");
    // 목록에서 선택한 멤버 삭제
    setList(deleteData(member.id));
    // id 초기화
    setId(0);
    // 검색어 초기화
    resetKeyword();
    // 검색 목록 재정의
    setSearchLsit(deleteData(member.id));
  };

  // 수정 버튼 클릭 시
  const handleUpdate = () => {
    setId(-2);
  }

  return(
    <div className="details">
      {id === 0?
        <div className="emptyset">
        정보가 없습니다.
      </div>
      :
        (id === -1 || id === -2?
          <MemberForm/>
          :
          <div className="info"> 
            <ul>
              <li>이름: {detail.name}</li>
              <li>부서: {detail.department}</li>
              <li>휴대폰: {detail.tel}</li>
              <li>메일: {detail.email}</li>
            </ul>
            <span>---------------------------------</span>
            <div className="btn-area">
              <button className="btn btn-del" onClick={() => handleDelete(detail)}>삭제</button>
              <button className="btn btn-upd" onClick={handleUpdate}>수정</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default MemberDetail