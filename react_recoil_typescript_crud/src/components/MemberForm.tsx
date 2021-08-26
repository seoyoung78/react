import { useRecoilState, useSetRecoilState } from "recoil";
import { memberState, memberListState, memberIdState, keywordState, searchListState } from "../atoms/contact";
import { addData, editData } from "../atoms/members";

function MemberForm () {
  // 데이터 목록 정의 및 수정을 위한 상태
  const [list, setList] = useRecoilState(memberListState);
  // 추가 혹은 수정된 member의 정보를 저장하기 위한 상태
  const [member, setMember] : any = useRecoilState(memberState);
  // 추가 혹은 수정 확인을 위한 상태
  const [id, setId] = useRecoilState(memberIdState);
  // 검색어 상태 setValue
  const setkeyword = useSetRecoilState(keywordState);
  // 검색할 목록 상태 setValue
  const setSlist = useSetRecoilState(searchListState);

  // 변경되는 값 저장
  const handleChange = (event : any) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    })
  };

  // 저장 버튼 클릭 시
  const handleClick = () => {
    // 임의 배열
    let tempList : any;

    // 추가 버튼 클릭 했을 경우
    if(id === -1) { 
      alert("추가되었습니다.");
      // 상세 보이도록 설정
      setId(member.id);
      // 추가된 데이터 목록 임의 배열에 저장
      tempList = addData(member.name, member.department, member.tel, member.email);
    } 
    // 수정 버튼 클릭 했을 경우
    else if(id === -2) {
      for (var i = 0; i < list.length; i++) {
        // 선택한 member의 id에 맞는 값이 변경
        if (member.id === list[i].id) {
          alert("수정되었습니다.");
          setId(member.id);
          // 수정된 데이터가 들어가 있는 목록을 임의 배열에 저장
          tempList = editData(member.id, member.name, member.department, member.tel, member.email);
        } 
      }
    }
    // 목록 재정의
    setList(tempList);
    // 검색할 목록 재정의
    setSlist(tempList);
    // 검색어 초기화
    setkeyword('');
  }

  return (
    <div>
      <div className="inp-form">
        <div>이름 :</div>
        <input className="inp-box" type="text" name="name" value={member.name} onChange={handleChange}></input>
      </div>
      <div className="inp-form">
        <div>부서 :</div>
        <input className="inp-box" type="text" name="department" value={member.department} onChange={handleChange}></input>
      </div>
      <div className="inp-form">
        <div>휴대폰 :</div>
        <input className="inp-box" type="text" name="tel" value={member.tel} onChange={handleChange}></input>
      </div>
      <div className="inp-form">
        <div>메일 :</div>
        <input className="inp-box" type="text" name="email" value={member.email} onChange={handleChange}></input>
      </div>
      <div className="btn-area">
        <button className="btn" onClick={handleClick}>저장</button>
      </div>
    </div>
  )
};

export default MemberForm;