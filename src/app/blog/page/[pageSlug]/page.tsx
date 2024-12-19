import Posts from '@/components/Posts'
import PaginationControls from '@/components/ui/PaginationControls'
import { getPostsMeta } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
   params: {
      pageSlug: string
   }
}

async function Page({ params }: Props) {
   const { pageSlug } = await params

   const perPage = 5
   // mocked, skipped and limited in the real app
   const start = (Number(pageSlug) - 1) * perPage // 0, 5, 10 ...
   const end = start + perPage // 5, 10, 15 ...

   const getPosts = await getPostsMeta()

   if (!getPosts) notFound()

   return (
      <div className="flex flex-col gap-2 min-h-screen items-center">
         <Posts posts={getPosts?.slice(start, end)} />

         <PaginationControls
            hasNextPage={Number(getPosts?.length) > end}
            hasPrevPage={start > 0}
            page={Number(pageSlug)}
            TotalPosts={getPosts?.length}
            perPage={perPage}
         />
      </div>
   )
}

export default Page
