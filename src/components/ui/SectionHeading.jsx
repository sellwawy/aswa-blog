import { cn } from '@/utils'

function SectionHeading({ children, className }) {
   return (
      <h2
         className={cn(
            'text-primary pb-spacing-11 text-center text-3xl font-semibold uppercase tracking-widest',
            className,
         )}>
         {children}
      </h2>
   )
}

export default SectionHeading
