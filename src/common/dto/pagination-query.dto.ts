import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  public limit: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  public offset: number;
}
