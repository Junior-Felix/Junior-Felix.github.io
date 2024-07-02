import { SITE } from "@config/config";

export function getPageNumbers(numberOfPosts: number) {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  let pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  console.log("pg", pageNumbers);
  return pageNumbers;
}
