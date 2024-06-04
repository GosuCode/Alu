import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  // folder we're looking for i/e blogs
  const folder = basePath + "/";
  // access all files
  const files = fs.readdirSync(folder);
  // read markdown post
  const markdownPost = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPost.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResolve = matter(fileContents);
    return {
      title: matterResolve.data.title,
      sub_title: matterResolve.data.sub_title,
      minutes_to_read: matterResolve.data.minutes_to_read,
      description: matterResolve.data.description,
      date: matterResolve.data.date,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
