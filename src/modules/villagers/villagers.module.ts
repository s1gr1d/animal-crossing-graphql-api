import { Module } from '@nestjs/common';
import { VillagersResolver } from './villagers.resolver';
import { DbConnectorModule } from '../db-connector/db-connector.module';
import { VillagersService } from './villagers.service';

@Module({
  imports: [DbConnectorModule],
  providers: [VillagersResolver, VillagersService],
})
export class VillagersModule {}
