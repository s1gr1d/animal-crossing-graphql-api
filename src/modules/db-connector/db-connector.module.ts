import { Module } from '@nestjs/common';
import { MediaWikiConnector } from './media-wiki-connector.service';

@Module({
  providers: [MediaWikiConnector],
  exports: [MediaWikiConnector],
})
export class MediaWikiConnectorModule {}
