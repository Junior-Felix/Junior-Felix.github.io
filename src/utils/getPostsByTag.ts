import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";
import { slugifyAll } from "./slugify";

export function getPostsByTag(posts: CollectionEntry<"blog">[], tag: string) {
  return getSortedPosts(
    posts.filter((post) => slugifyAll(post.data.tags).includes(tag)),
  );
}
