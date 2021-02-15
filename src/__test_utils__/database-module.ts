import { ConfigService } from '@nestjs/config';
import { TypegooseConnectionOptions, TypegooseModule } from 'nestjs-typegoose';
import { ConfigDynamicModule } from '../utils/config/config.mock';

const typegooseConnectionOptions: TypegooseConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export const TypegooseDynamicModule = TypegooseModule.forRootAsync({
  imports: [ConfigDynamicModule],
  inject: [ConfigService],
  async useFactory(configService: ConfigService) {
    return {
      uri: configService.get<string>('database.uri')!,
      ...typegooseConnectionOptions,
    };
  },
});
