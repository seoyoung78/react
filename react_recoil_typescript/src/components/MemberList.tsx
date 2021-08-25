import { useRecoilState } from "recoil";
import { memberListState, memberIdState, memberState } from "../atoms/contact";

function MemberList() {
  const [list, setlist] = useRecoilState(memberListState);
  const [id, setId] = useRecoilState(memberIdState);
  const [detail, setDetail] = useRecoilState(memberState);

  const handleClick = (mlist : any) => {
    if (id !== mlist.id) {
      setId(mlist.id);
      setDetail({
        name: mlist.name,
        department: mlist.department,
        tel: mlist.tel,
        email: mlist.email
      });
    }
  };
  
  return (
    <div className="contact-list">
      <ul>
        {list.map((list => 
          <li key={list.id}>
            <button type="button" onClick={() => handleClick(list)}>{list.name}</button>
          </li>))}
      </ul>
    </div>
  );
}

export default MemberList;