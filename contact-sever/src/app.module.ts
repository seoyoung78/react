import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule  } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot(), ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
