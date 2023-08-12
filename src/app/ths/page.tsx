'use client'

import Header from '../../components/Header'
import Content from '../../components/Content'

export default function Ths() {
  return (
    <main className='bg-grey-800 flex flex-col md:flex-row h-screen px-5 items-center justify-center'>
      <Header />
      <Content thsMode={true} />
    </main>
  )
}
