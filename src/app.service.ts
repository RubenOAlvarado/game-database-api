/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  private BASEURL: string;
  private APIKEY: string;

  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.BASEURL = this.configService.get<string>('BASE_URL') || '';
    this.APIKEY = this.configService.get<string>('API_KEY') || '';
  }

  getGames(searchQuery: string): Observable<any> {
    try {
      const url = `${this.BASEURL}?key=${this.APIKEY}&search=${searchQuery}`;
      const headers = {
        'Content-Type': 'application/json',
      };
      return this.httpService
        .get(url, { headers })
        .pipe(map((response) => response.data?.results));
    } catch (error) {
      console.error('Error fetching games:', error);
      throw new Error('Failed to fetch games');
    }
  }
}
