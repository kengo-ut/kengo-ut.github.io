import React from 'react'
import { SiPytorch, SiCplusplus, SiTypescript, SiFastapi } from 'react-icons/si'
import { FaPython, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { FaGolang } from 'react-icons/fa6'
import { IconType } from 'react-icons'

type SkillLevelProps = {
  Icon: IconType
  level: number
  textColor: string
  bgColor: string
}

const SkillLevel = ({ Icon, level, textColor, bgColor }: SkillLevelProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Icon className={`text-7xl text-center ${textColor}`} />
      <div className='bg-gray-200 w-full h-8 rounded-md'>
        <div
          style={{
            width: `${level * 20}%`,
          }}
        >
          <div
            className={`${bgColor} rounded-md`}
            style={{
              animation: 'box-animation 1.5s ease-in-out',
            }}
          >
            <p className='text-white text-center font-bold py-1'>{level}/5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    // Skills section
    <section className='relative'>
      <div className='absolute h-20 -top-20 invisible' id='skills'></div>
      <div className='container mx-auto'>
        <h2 className='text-6xl font-bold text-center'>Skills</h2>
        <hr className='w-1/12 mt-4 mx-auto border-2 border-black' />
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='bg-white p-10 rounded-3xl space-y-5 border-black border-2'>
            <h3 className='text-3xl font-bold text-center'>Machine Learning</h3>
            <p className='text-xl leading-8'>
              I have experience in machine learning, deep learning, and computer vision. I
              have worked on research projects on egocentric vision and diffusion models.
            </p>
            <div>
              <SkillLevel
                Icon={FaPython}
                level={3}
                textColor='text-yellow-500'
                bgColor='bg-yellow-500'
              />
              <SkillLevel
                Icon={SiPytorch}
                level={2}
                textColor='text-yellow-500'
                bgColor='bg-yellow-500'
              />
            </div>
          </div>
          <div className='bg-white p-10 rounded-3xl space-y-5 border-black border-2'>
            <h3 className='text-3xl font-bold text-center'>Frontend & Backend</h3>
            <p className='text-xl leading-8'>
              I have experience in frontend and backend development. I have worked on web
              applications using React, Next.js, FastAPI, and TypeScript.
            </p>
            <div>
              <SkillLevel
                Icon={FaReact}
                level={2}
                textColor='text-red-500'
                bgColor='bg-red-500'
              />
              <SkillLevel
                Icon={RiNextjsFill}
                level={2}
                textColor='text-red-500'
                bgColor='bg-red-500'
              />
              <SkillLevel
                Icon={SiFastapi}
                level={1}
                textColor='text-red-500'
                bgColor='bg-red-500'
              />
              <SkillLevel
                Icon={SiTypescript}
                level={2}
                textColor='text-red-500'
                bgColor='bg-red-500'
              />
            </div>
          </div>
          <div className='bg-white p-10 rounded-3xl space-y-5 border-black border-2'>
            <h3 className='text-3xl font-bold text-center'>Competitive Programming</h3>
            <p className='text-xl leading-8'>
              I have experience in competitive programming. I have participated in AtCoder
              and solved algorithmic problems (4 Kyu).
            </p>
            <div>
              <SkillLevel
                Icon={FaPython}
                level={3}
                textColor='text-blue-500'
                bgColor='bg-blue-500'
              />
              <SkillLevel
                Icon={SiCplusplus}
                level={2}
                textColor='text-blue-500'
                bgColor='bg-blue-500'
              />
              <SkillLevel
                Icon={FaGolang}
                level={1}
                textColor='text-blue-500'
                bgColor='bg-blue-500'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
