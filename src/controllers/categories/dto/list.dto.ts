import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class ListCategoryDto {
  @IsInt()
  @IsNotEmpty()
  page: number;

  @IsInt()
  @IsNotEmpty()
  pageSize: number;
}
