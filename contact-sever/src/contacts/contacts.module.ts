import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../entities/Member';
import { Dept } from '../entities/Dept';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Dept])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
