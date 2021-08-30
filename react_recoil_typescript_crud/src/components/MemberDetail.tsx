import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { memberIdState, keywordState, memberList, memberDetail } from "../atoms/contact";
// import { memberListState, memberIdState, memberState, keywordState, searchListState} from "../atoms/contact";
import MemberForm from "./MemberForm";
// import { deleteData } from "../atoms/members";
// import { IMember } from "../types/imembers";
import { IMember2 } from "../types/imember2";
import { deleteContact, getContactList } from "../utils/api/ApiService";

function MemberDetail() {
  // 상세 내역을 보여줄 member의 id 저장 변수
  const [id, setId] = useRecoilState<number>(memberIdState);
  // 해당 member의 상세내역
  // const detail = useRecoilValue<IMember>(memberState);
  const detail = useRecoilValue<IMember2>(memberDetail);
  // member 목록 - 삭제 시 변동 필요
  // const setList = useSetRecoilState<IMember[]>(memberListState);
  const setList = useSetRecoilState<IMember2[]>(memberList);
  // 검색어 상태
  const resetKeyword = useResetRecoilState(keywordState);
  // 검색 목록 상태
  // const setSearchLsit = useSetRecoilState<IMember[]>(searchListState);

  // 삭제 버튼 클릭 시
  const handleDelete = async (member : IMember2) => {
    alert(member.name + "님을 삭제하였습니다.");
    // 목록에서 선택한 멤버 삭제
    // setList(deleteData(member.id));
    await deleteContact(member.id);
    let data = await getContactList();
    setList(data);
    // id 초기화
    setId(0);
    // 검색어 초기화
    resetKeyword();
    // 검색 목록 재정의
    // setSearchLsit(deleteData(member.id));
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
              <li>부서: {detail.deptName}</li>
              <li>휴대폰: {detail.phone}</li>
              <li>메일: {detail.mail}</li>
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