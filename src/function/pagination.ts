import { Request } from "express";
import { ListCategoryDto } from "../controllers/categories/dto/list.dto";

interface PaginationOptions {
  page?: number;
  pageSize?: number;
}

export const getPaginationOptions = (req: Request): PaginationOptions => {
  const page = req.query.page
    ? parseInt(req.query.page as unknown as string, 10)
    : 1;
  const pageSize = req.query.pageSize
    ? parseInt(req.query.pageSize as unknown as string, 10)
    : 10;

  return {
    page,
    pageSize,
  };
};

export interface PaginationResult<T> {
  data: { rows: T[] }[];
  total: number;
  currentPage: number;
  totalPages: number;
  nextPage?: number | undefined; // เปลี่ยนเป็น number | undefined
}

export const getPaginationResult = <T>(
  result: T[],
  page: number,
  pageSize: number
): PaginationResult<T> => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const data = result.slice(startIndex, endIndex);
  const total = result.length;
  const totalPages = Math.ceil(total / pageSize);
  const currentPage = page;

  let nextPage: number | undefined; // เปลี่ยนเป็น number | undefined
  if (currentPage < totalPages) {
    nextPage = currentPage + 1;
  }

  return {
    data: [{ rows: data }],
    total,
    currentPage,
    totalPages,
    nextPage,
  };
};

export async function getPaginatedResult<T>(
  req: Request,
  listFunction: () => Promise<T[]>
): Promise<PaginationResult<T>> {
  const paginationOptions = getPaginationOptions(req);
  const page = paginationOptions.page || 1;
  const pageSize = paginationOptions.pageSize || 10;

  const result = await listFunction();
  const paginationResult = getPaginationResult(result, page, pageSize);

  return paginationResult;
}

// export const getPaginationResult = (result: any, page: any, pageSize: any) => {
//   const startIndex = (page - 1) * pageSize;
//   const endIndex = page * pageSize;
//   const data = result.slice(startIndex, endIndex);
//   const total = result.length;
//   const totalPages = Math.ceil(total / pageSize);
//   const currentPage = page;
//   let nextPage: number | undefined;
//   if (currentPage < totalPages) {
//     nextPage = currentPage + 1;
//   }

//   return {
//     data:[
//       rows:[
//         data,
//       ]
//     ],
//     total: total,
//     currentPage,
//     totalPages,
//     nextPage
//   };
// };
