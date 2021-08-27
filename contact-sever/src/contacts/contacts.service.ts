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

    console.log('getContactList = ', getContactList);
    return getContactList;
  }
}
