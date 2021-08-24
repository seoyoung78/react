import { useRecoilState } from "recoil";
import { memberListState, memberIdState, memberState } from "../atom/contact";

function MemberList() {
  const [list, setlist] = useRecoilState(memberListState);
  let id = useRecoilState(memberIdState);
  let detail = useRecoilState(memberState);

  // const handleClick = () => {
  //   if (id !== mid) {
  //     id = mid;
  //     // detail = list[0];
  //   }
  // }
  
  return (
    <div className="contact-list">
      <ul>
        {list.map((list => 
          <li key={list.id}>
            <button type="button" >{list.name}</button>
            {/* <button type="button" onClick={() => handleClick(list.id)}>{list.name}</button> */}
          </li>))}
      </ul>
    </div>
  );
}

export default MemberList;