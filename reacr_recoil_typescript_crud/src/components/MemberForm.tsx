import { useRecoilState } from "recoil";
import { memberState, memberListState, memberIdState } from "../atoms/contact";

function MemberForm () {
  const [member, setMember] : any = useRecoilState(memberState);
  const [list, setList] : any = useRecoilState(memberListState);
  const id = useRecoilState(memberIdState)

  const handleChange = (event : any) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    })
  };

  const handleClick = () => {
    let newList : any = [];
    if(member.id === 0) {
      setMember({
        ...member,
        id: list.length
      })
      newList = list.push(member);
      setList(newList);
    } else {
      for (var i = 0; i < list.length; i++) {
        if (member.id === list.id) {
          setList({

          })
        }
      }
    }
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