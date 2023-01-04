import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class BoardsService {
  constructor(@InjectConnection('mainConnection') private mainKnex: Knex) {}

  async test() {
    try {
      const test = await this.mainKnex('cid_signal_contents_category').select('*');

      console.log('test ::::', test);
    } catch (e) {
      console.error(e);
    }
  }
}
