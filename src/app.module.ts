import { Module } from '@nestjs/common';
import { MediaWikiConnectorModule } from './modules/media-wiki-connector/media-wiki-connector.module';
import { VillagersModule } from './modules/villagers/villagers.module';

@Module({
  imports: [MediaWikiConnectorModule, VillagersModule],
})
export class AppModule {}
