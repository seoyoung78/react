// 데이터 정의
let members = [
  {id: 1, name: "박시현", department: "헬스케어솔루션사업본부", tel: "010-1111-1111", email: "박시현@wehago.com"},
  {id: 2, name: "윤서영", department: "헬스케어솔루션사업본부", tel: "010-2222-2222", email: "윤서영@wehago.com"},
  {id: 3, name: "이종현", department: "헬스케어솔루션사업본부", tel: "010-3333-3333", email: "이종현@wehago.com"},
  {id: 4, name: "임도희", department: "플랫폼사업부문", tel: "010-4444-4444", email: "임도희@wehago.com"},
  {id: 5, name: "조민상", department: "플랫폼사업부문", tel: "010-5555-5555", email: "조민상@wehago.com"}
];

let newId = members.length + 1;

// 데이터 삭제
export const deleteData = (id: number) => {
  members = members.filter((list) => list.id !== id);
  return members;
};

// 데이터 추가
export const addData = (name: string, department: string, tel: string, email: string) => {
  members = [
    ...members,
    {
      id: newId,
      name,
      department,
      tel,
      email
    }
  ];
  newId++;
  return members;
}

// 데이터 수정
export const editData = (id: number, name: string, department: string, tel: string, email: string) => {
  members = deleteData(id);
  members = [
    ...members, {
      id,
      name,
      department,
      tel,
      email
    }
  ];
  return members;
};

export default members;