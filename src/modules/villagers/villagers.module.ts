import { Module } from '@nestjs/common';
import { VillagersResolver } from './villagers.resolver';
import { MediaWikiConnectorModule } from '../media-wiki-connector/media-wiki-connector.module';

@Module({
  imports: [
    MediaWikiConnectorModule
  ],
  providers: [VillagersResolver],
})
export class VillagersModule {}