import Posts from '@/components/Posts'
import PaginationControls from '@/components/ui/PaginationControls'
import SectionHeading from '@/components/ui/SectionHeading'
import { getPostsMeta } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Params = Promise<{ pageSlug: string }>

// export async function generateStaticParams() {
//   const posts = await getPostsMeta();

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postSlug: post.slug,
//   }));
// }

async function Page(props: { params: Params }) {
   const params = await props.params
   const pageSlug = params.pageSlug

   const perPage = 5
   // mocked, skipped and limited in the real app
   const start = (Number(pageSlug) - 1) * perPage // 0, 5, 10 ...
   const end = start + perPage // 5, 10, 15 ...

   const getPosts = await getPostsMeta()

   if (!getPosts) notFound()

   return (
      <main>
         <SectionHeading clssName="d">recently published</SectionHeading>
         <div className="flex flex-col gap-2 items-center">
            <Posts posts={getPosts?.slice(start, end)} />
            <PaginationControls
               hasNextPage={Number(getPosts?.length) > end}
               hasPrevPage={start > 0}
               page={Number(pageSlug)}
               TotalPosts={getPosts?.length}
               perPage={perPage}
            />
         </div>
      </main>
   )
}

export default Page
