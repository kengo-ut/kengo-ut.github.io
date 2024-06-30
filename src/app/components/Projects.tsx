import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    // Projects section
    <section className='relative'>
      <div className='absolute h-20 -top-20 invisible' id='projects'></div>
      <div className='container mx-auto'>
        <h2 className='text-6xl font-bold text-center'>Projects</h2>
        <hr className='w-1/12 mt-4 mx-auto border-2 border-black' />
        <div className='mt-4 grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='bg-white p-10 rounded-3xl space-y-5'>
            <h3 className='text-4xl font-bold text-center'>Internship</h3>
            <hr className='w-1/12 mt-4 mx-auto border-2 border-black' />
            <div className='bg-white p-10 rounded-3xl space-y-5 border-black border-2'>
              <Link
                href='https://akariinc.co.jp/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4 className='text-2xl font-bold text-center underline'>
                  燈株式会社／AKARI Inc. (June. 2023 - Current)
                </h4>
              </Link>
              <div className='text-xl leading-8 overflow-auto'>
                <h5 className='text-lg font-bold'>
                  1. 特定のドメインデータに対する異常検知の実装
                </h5>
                <h6 className='text-base'>
                  内容: このプロジェクトでは，6種類ほどの異常パターンが存在する特定ドメインの画像データに対し，機械学習モデルを利用して異常を検知するというタスクに取り組んだ．既存研究をサーベイし，その中で高性能な手法をベースラインとして採用，対象データに対する検知精度の向上に努めた．このプロジェクトの中で私はデータセットの構築に注力した．具体的には，正例画像の枚数や種類 (大まかな色味の差など)によって異常パターンごとの精度がどのように変化するかを細かく検証し，適切なデータセットの構築を模索した．最終的に，データセットの作成から精度検証までのパイプラインをパッケージ化し，検証スピードの向上に貢献した．
                </h6>
                <h6 className='text-base'>
                  使用技術: Python (PyTorch)
                </h6>
                <br />
                <h5 className='text-lg font-bold'>
                  2. RAGを用いた質問応答システムの開発
                </h5>
                <h6 className='text-base'>
                  内容: このプロジェクトでは，RAGを用いた質問応答アプリケーションの実装に取り組んだ．まず開発背景として，企業のヘルプデスクでは顧客や社員からの問い合わせに対し，マニュアルなどを用いて人が対応している．この対応方法は人的負担が大きく，自動化したいという要求があった．そこで，マニュアルをデータベース化し，質問内容に応じて適切な応答を返すアプリケーションの開発を行った．具体的なシステムとしては，特定のユーザが質問を入力すると，過去の質問/回答の履歴データベース (Faissによって構築)から近い質問と回答ペアを複数抽出し，ユーザの質問と抽出した情報を組み合わせてLLM (GPT-4)に入力することで，人手を介さずに回答が得られるというものである．私はフルスタックエンジニアとしてアプリケーションにおけるバックエンド，フロントエンドの開発を行った．バックエンドでは，データベースの作成，検索，LLMによる質問応答を実装し，それをFastAPIを用いてAPI化した．フロントエンドでは，これらの機能にアクセスするためのUI作成 (デザイン設計から実装まで)をTypeScriptとNext.js (React)を用いて行った．
                </h6>
                <h6 className='text-base'>
                  使用技術: Python (PyTorch, Faiss, FastAPI), TypeScript, Next.js
                </h6>
                <br />
                <h5 className='text-lg font-bold'>
                  3. LLMを用いた帳票認識システムの開発
                </h5>
                <h6 className='text-base'>
                  内容: このプロジェクトでは，LLMを用いた帳票認識アプリケーションの実装に取り組んでいる．開発背景として，企業では帳票のデータ入力が多く発生しており，その処理に多くの人的リソースが割かれている．そこで，帳票のデータ入力を自動化することで，人的リソースの削減を目指している．
                </h6>
                <h6 className='text-base'>
                  使用技術: Python
                </h6>
              </div>
            </div>
          </div>
          <div className='bg-white p-10 rounded-3xl space-y-5'>
            <h3 className='text-4xl font-bold text-center'>Research</h3>
            <hr className='w-1/12 mt-4 mx-auto border-2 border-black' />
            <div className='bg-white p-10 rounded-3xl space-y-5 border-black border-2'>
              <Link
                href='https://www.ipsj.or.jp/event/taikai/86/WEB/data/pdf/7S-06.html'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4 className='text-2xl font-bold text-center underline'>
                  LoRAによって追加学習された拡散モデルに対するメンバーシップ推論
                </h4>
              </Link>
              <h5 className='text-base'>
                内容: 近年，拡散モデルを著作物 (特にイラスト)で追加学習することで，不当に画風やモチーフを再現することが問題となっている．この問題に対しては，公開する著作物に目に見えない微小なノイズを加えることで，モデルに画風やモチーフを誤認識させ，生成そのものを抑止するというアプローチがあるが，これは公開データの品質を劣化させてしまう．これに対し私達は，あるデータが学習に用いられたかどうかを推論する「メンバーシップ推論」と呼ばれるアプローチによって，モデルが著作物で不正に追加学習されているかどうか検知することを試みた．私達は，拡散モデルの「ノイズ予測」という特性に着目した新たな手法を提案し，検知精度が改善することを示した．
              </h5>
              <p className='text-base leading-8'>
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
