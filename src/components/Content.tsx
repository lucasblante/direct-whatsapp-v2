import { Phone, ChatTeardropDots, PaperPlaneRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const sendMessageSchema = z.object({
  phone: z.string()
    .min(10, 'Telefone inválido')
    .max(25, 'Telefone inválido')
    .trim()
    .transform(phone => phone.replace(/\D/g, "")),
  message: z.string()
    .max(50, 'Mensagem com no máximo 50 caracteres')
    .trim()
    .transform(message => encodeURIComponent(message))
})

type sendMessageData = z.infer<typeof sendMessageSchema>

export default function Content() {

  const { register, handleSubmit, formState: { errors } } = useForm<sendMessageData>({
    resolver: zodResolver(sendMessageSchema)
  })

  function sendMessage(data: sendMessageData){
    window.open(`https://wa.me/send?phone=${data.phone}&text=${data.message}`, '_blank');
  }

  return (
    <main className="flex flex-col items-center w-fit max-w-sm rounded-xl gap-6 bg-grey-600 h-fit">

      <form onSubmit={handleSubmit(sendMessage)} className="flex flex-col w-96 p-6 space-y-6">

        <div className='flex flex-col gap-1'>
          <div className="flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 border-2 border-grey-800 focus-within:border-2 focus-within:border-grey-100">
            <Phone size={22} weight="fill" />
            <input
              type="text"
              placeholder="Telefone"
              className="bg-grey-800 placeholder-grey-300 text-grey-100 w-full outline-none ring-transparent "
              {...register('phone')}
            />
          </div>
          {errors.phone && <span className='text-red-500 text-right text-sm'>{errors.phone.message}</span>}
          
        </div>

        <div className='flex flex-col gap-1'>
          <div className="flex bg-grey-800 rounded-lg p-3 gap-2 text-grey-300 border-2 border-grey-800 focus-within:border-2 focus-within:border-grey-100">
            <ChatTeardropDots size={22} weight="fill" />
            <textarea
              placeholder="Sua mensagem..."
              className="bg-grey-800 placeholder-grey-300 text-grey-100 h-16 outline-none w-full"
              {...register('message')}
            ></textarea>
          </div>
          {errors.message && <span className='text-red-500 text-right text-sm'>{errors.message.message}</span>}
        </div>

        <button
          type='submit'
          className="flex items-center justify-center gap-1 bg-wpp-green-500 hover:bg-wpp-green-600 p-2 font-semibold text-xl text-white rounded-lg"
        >
          Send
          <PaperPlaneRight size={22} weight="fill" />
        </button>

      </form>

      <a
        href="http://www.capy.digital"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 mb-6 text-grey-300 text-sm hover:underline"
      >
        Desenvolvido por ©Capy Soluções.
      </a>
  </main>
  )
}