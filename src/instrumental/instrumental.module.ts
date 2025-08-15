import { Module } from '@nestjs/common';
import { InstrumentalController } from './instrumental.controller';
import { InstrumentalService } from './instrumental.service';
import { PrismaServiceModule } from '../prisma-service/prisma-service.module';

@Module({
  imports: [PrismaServiceModule],
  controllers: [InstrumentalController],
  providers: [InstrumentalService]
})
export class InstrumentalModule {}
