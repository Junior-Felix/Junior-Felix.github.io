import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

export const slugifyAll = (arr: Array<string>) =>
  arr.map((str) => slugifyStr(str));
