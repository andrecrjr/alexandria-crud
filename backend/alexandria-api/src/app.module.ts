import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { ContenttypeModule } from './contenttype/contenttype.module';

@Module({
  imports: [AuthModule, UsersModule, ContentModule, ContenttypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
