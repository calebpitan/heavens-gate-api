import { IsNumberString, IsOptional } from 'class-validator';

export class FindAllQuery {
  @IsNumberString({ no_symbols: true })
  @IsOptional()
  offset?: number;

  @IsNumberString({ no_symbols: true })
  @IsOptional()
  limit?: number;
}
