import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../entities/Member';
import { Dept } from '../entities/Dept';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Member) private MemberRepository: Repository<Member>,
    @InjectRepository(Dept) private DeptRepository: Repository<Dept>,
  ) {}

  // 전체 목록
  async getContactList(): Promise<any[]> {
    const getContactList = await this.MemberRepository.createQueryBuilder('MEMBER')
      .select(
        `MEMBER.id,
        MEMBER.name,
        DEPT.deptName,
        MEMBER.phone,
        MEMBER.mail`,
      )
      .from(Dept, 'DEPT')
      .where(`MEMBER.deptNo = DEPT.deptNo`)
      .andWhere(`MEMBER.delYN = 'N'`)
      .orderBy(`MEMBER.id`, 'ASC')
      .getRawMany();

    // console.log('getContactList = ', getContactList);
    return getContactList;
  };

  // 검색 목록
  async getSearchList(keyword): Promise<any[]> {
    const getSearchList = await this.MemberRepository.createQueryBuilder('MEMBER')
      .select(
        `MEMBER.id,
        MEMBER.name,
        DEPT.deptName,
        MEMBER.phone,
        MEMBER.mail`,
      )
      .from(Dept, 'DEPT')
      .where(`MEMBER.deptNo = DEPT.deptNo`)
      .andWhere(`MEMBER.delYN = 'N'`)
      .andWhere(`MEMBER.name like :name`, {name: '%' + keyword + '%'})
      .orderBy(`MEMBER.id`, 'ASC')
      .getRawMany();

      return getSearchList;
  }

  // Member 추가
  async addContact(member): Promise<any> {
    await this.MemberRepository.createQueryBuilder('MEMBER')
      .insert ()
      .into(Member)
      .values({
        name: member.name, 
        deptNo: "01", 
        phone: member.phone, 
        mail: member.mail
      })
      .execute();
  };

  // Member 정보 수정
  async updateContact(member): Promise<any> {
    await this.MemberRepository.createQueryBuilder('MEMBER')
      .update(Member)
      .set({ 
        name: member.name, 
        phone: member.phone, 
        mail: member.mail
      })
      .where("id = :id", {id: member.id})
      .execute();
  };

  // Member 삭제
  async deleteContact(id): Promise<any> {
    await this.MemberRepository.createQueryBuilder('MEMBER')
      .update(Member)
      .set({delYn: 'Y'})
      .where(`id = :id`, {id: id})
      .execute();
  };
}
