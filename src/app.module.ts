import { Module } from '@nestjs/common';
import { InstrumentalModule } from './instrumental/instrumental.module';
import { PrismaService } from './prisma-service/prisma-service.service';
import { PrismaServiceModule } from './prisma-service/prisma-service.module';

@Module({
  imports: [InstrumentalModule, PrismaServiceModule],
  providers: [PrismaService],
})
export class AppModule {}
