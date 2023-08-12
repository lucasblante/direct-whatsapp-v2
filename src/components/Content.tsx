import { Phone, ChatTeardropDots, PaperPlaneRight } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from './Button'

const sendMessageSchema = z.object({
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .max(20, 'Telefone inválido')
    .trim()
    .transform((phone) => phone.replace(/\D/g, '')),
  message: z
    .string()
    .max(50, 'Mensagem com no máximo 50 caracteres')
    .trim()
    .transform((message) => encodeURIComponent(message)),
})

type sendMessageData = z.infer<typeof sendMessageSchema>

interface ContentProps {
  thsMode: boolean
}

export default function Content({ thsMode }: ContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<sendMessageData>({
    resolver: zodResolver(sendMessageSchema),
  })

  function sendMessage(data: sendMessageData) {
    window.open(
      `https://wa.me/send?phone=${data.phone}&text=${data.message}`,
      '_blank'
    )
  }

  function thsMessage() {
    const date = new Date()
    const hour = date.getHours()

    if (hour >= 5 && hour <= 11) {
      return 'Bom dia! É da THS Informática, tudo bem?'
    } else if (hour >= 12 && hour <= 17) {
      return 'Boa tarde! É da THS Informática, tudo bem?'
    } else {
      return 'Boa noite! É da THS Informática, tudo bem?'
    }
  }

  return (
    <main className='flex flex-col items-center w-fit max-w-sm rounded-xl gap-6 bg-grey-600 h-fit'>
      <form
        onSubmit={handleSubmit(sendMessage)}
        className='flex flex-col w-96 p-6 space-y-6'
      >
        <div className='flex flex-col gap-1'>
          <div className='flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 border-2 border-grey-800 focus-within:border-2 focus-within:border-grey-100'>
            <Phone size={22} weight='fill' />
            <input
              type='text'
              maxLength={20}
              placeholder='Telefone'
              className='bg-grey-800 placeholder-grey-300 text-grey-100 w-full outline-none ring-transparent '
              {...register('phone')}
            />
          </div>
          {errors.phone && (
            <span className='text-red-500 text-right text-sm'>
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 border-2 border-grey-800 focus-within:border-2 focus-within:border-grey-100'>
            <ChatTeardropDots size={22} weight='fill' />
            <textarea
              placeholder='Sua mensagem...'
              className='bg-grey-800 placeholder-grey-300 text-grey-100 h-16 outline-none w-full overflow-hidden'
              defaultValue={thsMode ? thsMessage() : ''}
              {...register('message')}
            />
          </div>
          {errors.message && (
            <span className='text-red-500 text-right text-sm'>
              {errors.message.message}
            </span>
          )}
        </div>

        {!thsMode ? (
          <Button />
        ) : (
          <Button className='bg-blue-800 hover:bg-blue-900' />
        )}
      </form>

      <a
        href='http://www.capy.digital'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-2 mb-6 text-grey-300 text-sm hover:underline'
      >
        Desenvolvido por ©Capy Soluções.
      </a>
    </main>
  )
}
