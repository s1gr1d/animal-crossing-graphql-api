import { Module } from '@nestjs/common';
import { DbConnectorModule } from './modules/db-connector/db-connector.module';
import { Request } from 'express';
import { VillagersModule } from './modules/villagers/villagers.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }: { req: Request }) => ({ req }),
    }),
    VillagersModule,
    DbConnectorModule,
  ],
})
export class AppModule {}
