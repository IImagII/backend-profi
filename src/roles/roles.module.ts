import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

/**можно все файлы создать командой nest generate resource roles */
@Module({
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
