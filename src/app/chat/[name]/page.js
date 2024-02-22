'use client'

import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

function chat({params}) {
    const [name] = useState(params.name)
    const [mensage, setMensage] = useState('')


    return (
        <main className='flex flex-col h-[100vh] items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center gap-10 rounded-3xl bg-gray-900 border-rad max-w-92 p-16 drop-shadow-xl'>
                <h1 className='text-5xl font-bold text-purple-700'>Olá {name}</h1>
                <form className='flex flex-col gap-3'>
                    
                    <input onChange={(e) => setMensage(e.target.value)} type="text" id="nome" className='bg-black rounded-full px-2 py-2 placeholder:text-gray-700 outline-none border-2 border-transparent focus:border-purple-800' placeholder='Digite uma mensagem...' />
                    {
                        mensage != '' ? 
                        <Link className='hover:bg-purple-100 hover:text-purple-950 font-semibold rounded-2xl py-2 bg-purple-900 htext-white transition-colors text-center' 
                        href={`chat/${name}`}>
                            Entrar
                        </Link>
                        :
                        <button className=' font-semibold rounded-2xl py-2 bg-purple-950 text-white transition-colors text-center cursor-not-allowed' 
                        >
                            Entrar
                        </button>
                    }
                </form>
            </div>
        </main>
    )
}

export default chat