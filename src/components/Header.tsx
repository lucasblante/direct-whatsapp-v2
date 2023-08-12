import { Genos } from 'next/font/google'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

const genosFont = Genos({ subsets: ['latin'] })

export default function Header() {
  return (
    <header className='flex flex-col gap-6 md:h-fit md:mr-8 text-grey-100 max-w-sm'>
      <div className='flex flex-row gap-2 mt-4 items-center'>
        <PaperPlaneTilt
          size={30}
          weight='fill'
          className='md:h-10 h-8 w-auto'
        />
        <strong
          className={twMerge('font-medium text-5xl', genosFont.className)}
        >
          Direct Whatsapp
        </strong>
      </div>
      <span className='text-lg md:text-xl mb-10 font-regular '>
        Envie mensagens para números no Whatsapp sem a necessidade de adicionar
        aos contatos.
      </span>
    </header>
  )
}
