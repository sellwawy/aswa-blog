import getFormattedDate from '@/lib/getFormattedDate'
import { getPostsMeta, getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
// import 'highlight.js/styles/github-dark.css'
// 86400
// export const revalidate = 0

type Props = {
   params: {
      postSlug: string
   }
}

// export async function generateStaticParams() {
//    const posts = await getPostsMeta()

//    if (!posts) return []

//    return posts.map((post) => ({
//       postSlug: post.slug,
//    }))
// }

// export async function generateMetadata({ params: { postSlug } }: Props) {
//    const post = await getPostByName(`${postSlug}.mdx`) //deduped!

//    if (!post) {
//       return {
//          title: 'Post Not Found',
//       }
//    }

//    return {
//       title: post.meta.title,
//    }
// }

async function Post({ params }: Props) {
   const { postSlug } = await params
   const post = await getPostByName(`${postSlug}.mdx`) //deduped!

   if (!post) notFound()

   const { meta, content } = post

   // const tags = meta.tags.map((tag, i) => (
   //    <Link key={i} href={`/tags/${tag}`}>
   //       {tag}
   //    </Link>
   // ))

   return (
      <>
         <h1 className="text-3xl mt-4 mb-0">{meta.title}</h1>
         <time dateTime={meta.date}>{getFormattedDate(meta.date)}</time>
         <article>{content}</article>
         <section>
            <h3>Related:</h3>
            <div className="flex flex-row gap-4">{}</div>
         </section>
         <p className="mb-10">
            <Link href="/">← Back to home</Link>
         </p>
      </>
   )
}

export default Post
