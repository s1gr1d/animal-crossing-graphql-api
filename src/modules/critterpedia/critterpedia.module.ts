import { Module } from '@nestjs/common';
import { DbConnectorModule } from '../db-connector/db-connector.module';
import { CritterpediaService } from './critterpedia.service';
import { CritterpediaResolver } from './critterpedia.resolver';

@Module({
  imports: [DbConnectorModule],
  providers: [CritterpediaResolver, CritterpediaService],
})
export class CritterpediaModule {}
