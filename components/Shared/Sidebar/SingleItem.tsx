import Link from 'next/link'
import React from 'react'
import { SingleitemProps } from './SingleItems.types'

export function SingleItem(props: SingleitemProps) {
  const { href, icon: Icon, label, onClick} = props;

  return (
    <Link 
      href={href} 
      className='flex gap-2 items-center p-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md'
      onClick={ onClick }
    >
      <div className='bg-blue-100/20 p-2 rounded-md'>
        <Icon size={20} />
      </div>
      {label}
    </Link>
  )
}
