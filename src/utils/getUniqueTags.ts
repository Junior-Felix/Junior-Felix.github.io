import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

interface Tag {
  tag: string;
  tagName: string;
}
export function getUniqueTags(posts: CollectionEntry<"blog">[]) {
  const tags: Tag[] = posts
    .flatMap((post) => post.data.tags)
    .map((tag) => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex((tag) => tag.tag === value.tag) === index,
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
}
