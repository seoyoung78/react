import { useState } from 'react';
import './app.css';

const data = [
  {id: 0, name: "박시현", department: "헬스케어솔루션사업본부", tel: "010-1111-1111", email: "박시현@wehago.com"},
  {id: 1, name: "윤서영", department: "헬스케어솔루션사업본부", tel: "010-2222-2222", email: "윤서영@wehago.com"},
  {id: 2, name: "이종현", department: "헬스케어솔루션사업본부", tel: "010-3333-3333", email: "이종현@wehago.com"},
  {id: 3, name: "임도희", department: "플랫폼사업부문", tel: "010-4444-4444", email: "임도희@wehago.com"},
  {id: 4, name: "조민상", department: "플랫폼사업부문", tel: "010-5555-5555", email: "조민상@wehago.com"}
];

function App() {
  const [membersList, setMembersList] = useState(data);
  const [memberId, setMemberId] = useState(6);
  const [keyword, setKeyword] = useState();
  const [member, setMember] = useState();

  const handleChange = (event) => {
    setMemberId(6);
    const newMemberList = [];
    if (event.target.value === "") {
      setMembersList(data);
    } else {
        for (var i = 0; i < data.length; i++) {
          if(data[i].name.includes(event.target.value)) {
            newMemberList.push(data[i]);
        }
        setMembersList(newMemberList);
      }
    }    
  };

  const handleClick = (list) => {
    if(memberId !== list.id) {
      setMemberId(list.id);
      setMember({
        name: list.name,
        department: list.department,
        tel: list.tel,
        email: list.email
      });
    }
  };

  return (
    <div className="container">
      <div className="subject">Members</div>
      <div className="contact-wrap">
        <div className="col left">
          <div className="search-box">
            <input className="inp-sch" type="text" placeholder="검색어를 입력하세요." value={keyword} onChange={handleChange}></input>
          </div>
          <div className="contact-list">
            <ul>
              {membersList.map((list => 
                <li key={list.id}>
                  <button type="button" onClick={() => handleClick(list)}>{list.name}</button>
                </li>))}
            </ul>
          </div>
        </div>
        <div className="col rigth">
          <div className="details">
            {memberId === 6 ? 
              <div className="emptyset">
                정보가 없습니다.
              </div>
            :
              <div className="info"> 
                <ul>
                  <li>이름: {member.name}</li>
                  <li>부서: {member.department}</li>
                  <li>휴대폰: {member.tel}</li>
                  <li>메일: {member.email}</li>
                </ul>
              </div>
            }
          </div>   
        </div>
      </div>
    </div>
  );
}

export default App;