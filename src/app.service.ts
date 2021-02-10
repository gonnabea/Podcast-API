import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '팟캐스트 클론 탬플릿입니다!!!';
  }
}
