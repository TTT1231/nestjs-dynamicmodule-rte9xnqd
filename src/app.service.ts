import { Inject, Injectable } from '@nestjs/common';
import type { IThirdModuleOptions } from './dynamic-module/third-module';
import { THIRD_MODULE_OPTIONS } from './dynamic-module/constant';

@Injectable()
export class AppService {
  //   constructor(@Inject(THIRD_MODULE_OPTIONS) private readonly options: IThirdModuleOptions) {
  //     console.log('AppService received ThirdModule options:', this.options);
  //   }
  getHello(): string {
    return 'Hello World!';
  }
}
