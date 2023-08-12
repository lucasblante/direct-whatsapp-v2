import { PaperPlaneRight } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type='submit'
      className={twMerge(
        'flex items-center justify-center gap-2 bg-wpp-green-500 hover:bg-wpp-green-600 p-2 font-semibold text-xl text-white rounded-lg',
        rest.className
      )}
    >
      Enviar
      <PaperPlaneRight size={22} weight='fill' />
    </button>
  )
}
