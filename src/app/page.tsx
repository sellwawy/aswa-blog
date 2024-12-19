// export const revalidate = 86400
import Contact from '@/components/home/Contact'
import HomeHero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'

function HomePage() {
   return (
      <main>
         <HomeHero />
         <Projects />
         <Contact />
      </main>
   )
}

export default HomePage
