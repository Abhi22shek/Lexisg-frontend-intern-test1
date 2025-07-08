import { Scale } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-white border border-b-gray-200 shadow-sm'>
        <div className='mx-auto max-w-4xl px-4 py-6'>
            <div className='flex items-center gap-4' >
                <div className='p-2 bg-gray-100 rounded-lg'>
                    <Scale className='w-15 h-10'/>
                </div>
                <h className='font-bold text-4xl'> Legal Assistant Interface with Citations</h>
            </div>
        </div>
    </header>
  )
}

export default Header