import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SheetName } from '../../types/spreadsheet';
import { spreadsheetToObjectArray } from '../../util/modifyData';
import { SpreadsheetResponse } from '../../types/spreadsheet';
import { Villager } from '../../types/categories/villager';
import { Insect } from '../../types/categories/insect';

@Injectable()
export class DbConnectorService {
  private readonly spreadsheetId: string;
  private readonly API_KEY: string; // Google API Key

  constructor() {
    this.spreadsheetId = '13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4';
    this.API_KEY = process.env.API_KEY ? process.env.API_KEY : '';
  }

  private async getSpreadsheetData(sheetName: SheetName, area: string) {
    const params = {
      key: this.API_KEY,
      majorDimension: 'ROWS',
      valueRenderOption: 'FORMULA',
    };

    const response = await axios.get<SpreadsheetResponse>(
      `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}!${area}`,
      { params },
    );

    const spreadsheetValues = response.data.values;
    console.log(spreadsheetValues);
    return spreadsheetToObjectArray(spreadsheetValues);
  }

  public async getVillagers(): Promise<Villager[]> {
    return await this.getSpreadsheetData(SheetName.VILLAGERS, 'A1:S392');
  }

  public async getInsects(): Promise<Insect[]> {
    return await this.getSpreadsheetData(SheetName.INSECTS, 'A1:AP81');
  }
}
