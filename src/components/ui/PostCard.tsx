import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

function PostCard({ slug, title, date, description }: Meta) {
   return (
      <article className="mb-[1rem]">
         <header>
            <h3 className="text-[2rem]">
               <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
         </header>
         <time dateTime={date}>{getFormattedDate(date)}</time>
         <p>{description}</p>
      </article>
   )
}

export default PostCard
