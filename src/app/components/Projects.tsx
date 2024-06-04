import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    // Projects section
    <section className='relative'>
      <div className="absolute h-20 -top-20 invisible" id='projects'></div>
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center">Projects</h2>
        <hr className="w-1/12 mt-4 mx-auto border-2 border-black" />
        <div className="mt-4 grid grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl space-y-5 border-black">
            <h3 className="text-4xl font-bold text-center">Internship</h3>
            <hr className="w-1/12 mt-4 mx-auto border-2 border-black" />
            <div className="bg-white p-10 rounded-3xl space-y-5 border-black border-2">
              <Link href="https://akariinc.co.jp/" target='_blank' rel='noopener noreferrer'>
                <h4 className="text-2xl font-bold text-center underline">燈株式会社／AKARI Inc. (June. 2023 - Current)</h4>
              </Link>
              <p className="text-xl leading-8 overflow-auto">
                I have worked on the following projects:
                <br />
                - Anomaly detection projects for building domain data
                <br />
                - Development of a RAG-based question and answer system
                <br />
                - Development of a ledger sheet recognition system using LLM
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl space-y-5 border-black">
            <h3 className="text-4xl font-bold text-center">Research</h3>
            <hr className="w-1/12 mt-4 mx-auto border-2 border-black" />
            <div className="bg-white p-10 rounded-3xl space-y-5 border-black border-2">
              <h4 className="text-2xl font-bold text-center">LoRAによって追加学習された拡散モデルに対するメンバーシップ推論</h4>
              <p className="text-xl leading-8">
                池内健心, 毛家豊, 郁青, 入江豪, 相澤清晴
                <br />
                情報処理学会大会, 7S-06, 2pages, Mar. 15-17, 2024, Yokohama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
