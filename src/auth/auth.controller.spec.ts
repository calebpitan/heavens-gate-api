import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { CacheService } from '../utils/caching/cache.service';
import { AppLogger } from '../utils/logger/logger.service';
import { AuthService } from './auth.service';
import { AuthHelper } from './auth.helper';
import { ConfigDynamicModule } from '../utils/config/config.mock';
import { TypegooseModule } from 'nestjs-typegoose';
import { Account } from '../account/entity/account.entity';
import { TypegooseDynamicModule } from '../__test_utils__/database-module';

jest.mock('../utils/caching/cache.service', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { CacheServiceMock } = require('../__mocks__/utils/caching/cache.service');
  return { CacheService: CacheServiceMock };
});

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigDynamicModule, TypegooseDynamicModule, TypegooseModule.forFeature([Account])],
      controllers: [AuthController],
      providers: [AppLogger, CacheService, AuthHelper, AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
