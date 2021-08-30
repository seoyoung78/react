import { Controller, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  // 전체 목록 조회
  @Get()
  async Get(): Promise<any[]> {
    return this.contactsService.getContactList();
  }

  // 검색 목록 조회
  @Get(':keyword')
  async search(@Param('keyword') keyword: string): Promise<any[]> {
    return this.contactsService.getSearchList(keyword);
  }

  // 멤버 추가
  @Post()
  async Post(@Body() member): Promise<any> {
    return this.contactsService.addContact(member);
  }

  // 멤버 수정
  @Patch()
  async updatePatch(@Body() member): Promise<any> {
    return this.contactsService.updateContact(member);
  }

  // 멤버 삭제(column 수정)
  @Patch(':id')
  async delPatch(@Param('id') id: number): Promise<any> {
    return this.contactsService.deleteContact(id);
  }
}