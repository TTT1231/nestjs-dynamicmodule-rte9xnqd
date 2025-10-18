import { Global, DynamicModule, Module } from '@nestjs/common';
import { ForRootService } from './forRoot.service';
import { FOR_ROOT_MODULE_OPTIONS, type ForRootModuleOptions } from './forRoot.constants';

// 重新导出以保持向后兼容
export { FOR_ROOT_MODULE_OPTIONS, type ForRootModuleOptions } from './forRoot.constants';

@Module({})
export class ForRootModule {
  public static forRoot(options: ForRootModuleOptions): DynamicModule {
    return {
      global: true, // 明确声明为全局模块
      module: ForRootModule,
      providers: [
        {
          provide: FOR_ROOT_MODULE_OPTIONS,
          useValue: options,
        },
        ForRootService,
        //... other providers like services
      ],
      exports: [
        //export providers here,like services
        //...
        ForRootService,
        //or export the options token,so it can be injected in other modules
        //@Inject(FOR_ROOT_MODULE_OPTIONS) private options: ForRootModuleOptions
        FOR_ROOT_MODULE_OPTIONS,
      ],
    };
  }
}
