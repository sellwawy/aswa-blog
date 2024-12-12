/* eslint-disable react/jsx-key */
import React from 'react'
import project_1 from '../../public/images/project-1.jpg'
import project_2 from '../../public/images/project-2.jpg'
import project_3 from '../../public/images/project-3.jpg'
import {
   FaBehance,
   FaBootstrap,
   FaEye,
   FaGithub,
   FaWordpress,
} from 'react-icons/fa6'
import { SiJamstack, SiNextdotjs } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'
import { TbFileTypePhp } from 'react-icons/tb'

const projectImages = [project_1, project_2, project_3]

export const workData = [
   {
      imageSrc: projectImages[0],
      title: 'Lorem ipsum dgolor sit amet voluptatibus',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum iste quidem consequatur qui numquam.',
      previewIcons: [<FaEye className="" />, <FaBehance className="" />],
      techIcons: [<FaWordpress className="" />, <TbFileTypePhp className="" />],
   },
   {
      imageSrc: projectImages[1],
      title: 'Lorem ipsum dgolor sit amet',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero aspernatur corrupti. Cumque nihil facilis dolores natus.',
      previewIcons: [<FaEye className="" />, <FaGithub className="" />],
      techIcons: [<FaWordpress className="" />, <FaBootstrap className="" />],
   },
   {
      imageSrc: projectImages[2],
      title: 'Lorem ipsum dgolor sit amet elit',
      description:
         'Lorem ipsum dgolor sit amet Lorem ipsum dgolor sit amet consequatur qui numquam.',
      previewIcons: [<FaEye className="" />, <FaGithub className="" />],
      techIcons: [
         <SiNextdotjs className="" />,
         <SiJamstack className="" />,
         <IoLogoVercel className="" />,
      ],
   },
]
