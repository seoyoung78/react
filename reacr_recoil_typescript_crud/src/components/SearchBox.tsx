import { useRecoilState } from "recoil";
import { memberListState, memberIdState, keywordState, memberState } from "../atoms/contact";
import members from '../data/members';

function SearchBox() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [id, setId] = useRecoilState(memberIdState);
  const [list, setlist] = useRecoilState(memberListState);
  const [member, setMember] = useRecoilState(memberState);

  const handleChange = (event : any) => {
    setId(-1);
    setKeyword(event.target.value);
    const newMList : any = [];
    if (event.target.value === "") {
      setlist(members);
    } else {
      for (var i = 0; i < members.length; i++) {
        if(members[i-1].name.includes(event.target.value)) {
          newMList.push(members[i]);
        }
      }
      setlist(newMList);
    }
  };

  const handleClick = () => {
    setId(0);
    setMember({
      id: 0,
      name: '',
      department: '',
      tel: '',
      email: ''
    })
  };

  console.log(id);
  console.log(list);
  console.log(member);

  return (
    <div className="search-box">
      <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={keyword} onChange={handleChange}></input>
      <button className="btn-sch" onClick={handleClick}>추가</button>      
    </div>
  );
}

 export default SearchBox;