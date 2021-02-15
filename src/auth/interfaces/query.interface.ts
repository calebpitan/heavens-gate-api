import { IsEnum, IsString } from 'class-validator';

enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export class AuthQuery {
  @IsString()
  device_name!: string;

  @IsString()
  device_version!: string;

  @IsString()
  browser_name!: string;

  @IsString()
  @IsEnum(DeviceType)
  device_type!: DeviceType;
}
