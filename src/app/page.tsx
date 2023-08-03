'use client'

import { PaperPlaneRight, Phone, ChatTeardropDots } from '@phosphor-icons/react'
import { Genos } from 'next/font/google'
import Image from 'next/image'

const genos = Genos({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-grey-800 flex flex-col md:flex-row h-screen items-center justify-center">
      <header className="flex flex-col gap-6 md:h-fit md:mr-8 text-grey-100 max-w-sm">
        <div className='flex flex-row gap-2 mt-4 items-center'>
          <Image src='whatsappLogo.svg' alt='Whatsapp Logo' width={1} height={1} className='w-6 h-auto md:w-10' />
          <strong className={`${genos.className} text-3xl font-medium md:text-5xl `}>Direct Whatsapp</strong>
        </div>
        <span className='text-lg md:text-xl mb-10 font-regular'>Envie mensagens para números no Whatsapp sem a necessidade de adicionar aos contatos.</span>
      </header>
      <main className="flex flex-col items-center w-fit max-w-sm p-6 rounded-xl gap-6 bg-grey-600 h-fit">
        <form action="" className="flex flex-col gap-6">
          <div className='flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 '>
            <Phone size={22} weight='fill' />
            <input type="tel" name="" id="" placeholder='Telefone' className='bg-grey-800 placeholder-grey-300 w-full' />
          </div>
          <div className='flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 '>
            <ChatTeardropDots size={22} weight='fill' />
            <textarea name="teste" id="" cols={30} rows={20} placeholder='Sua mensagem...' className='bg-grey-800 placeholder-grey-300 h-16'></textarea>

          </div>
          <button type="submit" className="flex items-center justify-center gap-1 bg-wpp-green-500 hover:bg-wpp-green-600 p-2 font-semibold text-xl text-white rounded-lg" >
            Send
            <PaperPlaneRight size={22} />
          </button>
        </form>
        <a href="http://www.capy.digital" target="_blank" rel="noopener noreferrer" className="mt-4 text-grey-300 text-sm hover:underline" >Desenvolvido por ©Capy Soluções.</a>
      </main>
    </main>
  )
}
