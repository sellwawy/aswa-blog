// export const revalidate = 86400
import HomeHero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'

function HomePage() {
   return (
      <main>
         <HomeHero />
         <Projects />
      </main>
   )
}

export default HomePage
