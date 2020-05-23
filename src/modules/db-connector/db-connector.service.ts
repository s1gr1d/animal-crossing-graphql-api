import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MediaWikiConnector {
  constructor() {}

  // Returns all details about the specified Subreddit
  public async villager(name: string): Promise<any> {
    return await axios.get(`http://acnhapi.com/villagers/${name}`);
    //return http://acnhapi.com/villagers/{villagerID};
  }
}
