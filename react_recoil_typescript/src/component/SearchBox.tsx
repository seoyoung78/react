import { useRecoilState } from "recoil";
import { keywordState } from "../atom/contact";

function SearchBox() {
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const handleChange = () => {
    // console.log(event.target.value);
  }

  // console.log(word);

  return (
    <div className="search-box">
      {/* <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={word} onChange={handleChange}></input> */}
      <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={keyword} onChange={handleChange}></input>
    </div>
  );
}

 export default SearchBox;