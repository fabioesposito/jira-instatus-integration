import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  apiURL = 'https://api.instatus.com/';

  getHello(): string {
    return 'Hello World';
  }

  createIncident(): string {
    // {
    //   "name": "Test incident",
    //   "message": "We're currently investigating an issue with the Website",
    //   "components": ["ckf01fvnxywz50a35nh1qzssm"],
    //   "started": "2020-09-12 05:38:47.998",
    //   "status": "INVESTIGATING",
    //   "notify": true,
    //   "statuses": [
    //     {
    //       "id": "ckf01fvnxywz50a35nh1qzssm",
    //       "status": "OPERATIONAL"
    //     }
    //   ]
    // }

    throw new Error('Method not implemented.');
  }

  updateIncident(): string {
    // {
    //   "name": "Test incident 2",
    //   "message": "We're currently investigating an issue with the Website",
    //   "components": ["ckf01fvnxywz50a35nh1qzssm"],
    //   "started": "2020-09-12 05:38:47.998",
    //   "status": "INVESTIGATING",
    //   "notify": true,
    //   "statuses": [
    //     {
    //       "id": "ckebhqpxnrk1c0a3588oztaty",
    //       "status": "OPERATIONAL"
    //     }
    //   ]
    // }
    throw new Error('Method not implemented.');
  }

  addComment(): string {
    // {
    //   "message": "We're currently investigating an issue with the Website",
    //   "components": ["ckf01fvnxywz50a35nh1qzssm"],
    //   "started": "2020-09-12 05:38:47.998",
    //   "status": "INVESTIGATING",
    //   "notify": true,
    //   "statuses": [
    //     {
    //       "id": "ckebhqpxnrk1c0a3588oztaty",
    //       "status": "OPERATIONAL"
    //     }
    //   ]
    // }
    throw new Error('Method not implemented.');
  }

  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }
}
