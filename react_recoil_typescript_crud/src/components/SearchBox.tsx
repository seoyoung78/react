import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { memberListState, memberIdState, keywordState, memberState , searchListState} from "../atoms/contact";
import { IMember } from "../types/imembers";

function SearchBox() {
  // 검색 키워드 상테
  const [keyword, setKeyword] = useRecoilState<string>(keywordState);
  // 검색 목록 상태
  const members = useRecoilValue<IMember[]>(searchListState);
  // 오른쪽 상세 및 추가 폼 변경을 위한 상태 setValue
  const setId = useSetRecoilState<number>(memberIdState);
  // 검색 후 목록 상태 setValue
  const setlist = useSetRecoilState<IMember[]>(memberListState);
  // 추가 시 member 상태 초기화를 위한 setValue
  const setMember : any = useSetRecoilState(memberState);
  
  // 검색어 입력 시
  const handleChange = (event : any) => {
    // 오른쪽 컴포넌트 변경
    setId(0);
    // 키워드 상태 저장
    setKeyword(event.target.value);
    // 임의 배열 선언
    let newMList : any = [];
    // 키워드가 빈칸일 경우 목록 초기화
    if (event.target.value === "") {
      setlist(members);
    } 
    // 키워드가 있는 경우
    else {
      // 해당 키워드에 맞는 값이 있는지 확인
      for (var i = 0; i < members.length; i++) {
        if(members[i].name.includes(event.target.value)) {
          // 임의 배열에 키워드에 맞는 목록 저장
          newMList = newMList.concat(members[i]);
        }
        // 검색에 맞는 목록 저장
        setlist(newMList);
      }
    }
  };

  // 추가 버튼 클릭 시
  const handleClick = () => {
    // 추가 폼으로 컴포넌트 전환
    setId(-1);
    // 입력 폼에 들어갈 상태 초기화
    setMember({
      id: 0,
      name: '',
      department: '',
      tel: '',
      email: ''
    })
  };

  return (
    <div className="search-box">
      <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={keyword} onChange={handleChange}></input>
      <button className="btn-sch" onClick={handleClick}>추가</button>      
    </div>
  );
}

 export default SearchBox;