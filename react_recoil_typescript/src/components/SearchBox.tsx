import { useRecoilState } from "recoil";
import { memberListState, memberIdState, keywordState } from "../atoms/contact";
import members from '../data/members';

function SearchBox() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [id, setId] = useRecoilState(memberIdState);
  const [list, setlist] = useRecoilState(memberListState);

  const handleChange = (event : any) => {
    setId(6);
    setKeyword(event.target.value);
    const newMList : any = [];
    if (event.target.value === "") {
      setlist(members);
    } else {
      for (var i = 0; i < members.length; i++) {
        if(members[i].name.includes(event.target.value)) {
          newMList.push(members[i]);
        }
      }
      setlist(newMList);
    }
  };

  return (
    <div className="search-box">
      <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={keyword} onChange={handleChange}></input>
    </div>
  );
}

 export default SearchBox;