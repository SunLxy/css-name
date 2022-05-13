import { VFile } from 'vfile'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import gfm from 'remark-gfm';
import slug from 'rehype-slug';
import headings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeAttrs from 'rehype-attr';
import rehypePrism from 'rehype-prism-plus';
import rehypeRewrite from "rehype-rewrite";
import { toHtml } from 'hast-util-to-html'
export const createRemark = (value) => {
  const rehypePlugins = [
    [rehypePrism, { ignoreMissing: true }],
    rehypeRaw,
    slug,
    headings,
    [rehypeRewrite],
    [rehypeAttrs, { properties: 'attr' }],
  ];
  const remarkPlugins = [gfm];
  const processor = unified()
    .use(remarkParse)
    .use(remarkPlugins)
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypePlugins || [])
  const file = new VFile()
  file.value = value
  const child = processor.parse(file)
  const hastNode = processor.runSync(child, file)
  return toHtml(hastNode)
}
