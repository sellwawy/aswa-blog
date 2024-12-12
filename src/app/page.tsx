import Hero from '@/components/Home/Hero'
import Posts from '@/components/Posts'
import { getPostByName, getPostsMeta } from '@/lib/posts'

// export const revalidate = 86400

export default async function Home() {
   const post = await getPostByName('image-component-nextjs.mdx')
   console.log(post)

   return (
      <main>
         <Hero />
         <Posts posts={await getPostsMeta()} />
      </main>
   )
}
