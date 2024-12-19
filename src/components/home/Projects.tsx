import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/ProjectCard'
import { projectsData } from '@/constants/projectsData'

function project() {
   const projectsData_2 = projectsData.map((project, index) => (
      <Card
         className=""
         key={index}
         imageSrc={project.imageSrc}
         projectName={project.title}
         description={project.description}
         previewIcons={project.previewIcons}
      />
   ))

   return (
      <section id="projects" className="bg-quaternary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">Projects</SectionHeading>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-x-spacing-10 gap-y-spacing-10">
               {projectsData_2}
            </div>
         </div>
      </section>
   )
}

export default project
