'use client'

import { SocketContext } from '@/context/socketContext'
import React, { useContext, useEffect, useState } from 'react'

function chat() {

    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    const [socket] = useContext(SocketContext)

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current, data])
        })

    
        return () => socket.off('receive_message')
    }, [socket])


    const handleButton = async (e) => {
        e.preventDefault()
        await socket.emit('message', message)
        clearInputMessage()
    }

    const clearInputMessage = () => {
        setMessage('')
    }
    return (
        <main className='flex flex-col h-[100vh] items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center gap-10 rounded-3xl bg-gray-900 border-rad max-w-92 p-16 drop-shadow-xl'>
                <h1 className='text-5xl font-bold text-purple-700'>Chat Online</h1>
                <form className='flex flex-col gap-3'>

                    {messageList.map((messageData) => (
                        <p>{messageData.authorName}: {messageData.message}</p>
                    ))

                    }

                    <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" id="nome" className='bg-black rounded-full px-2 py-2 placeholder:text-gray-700 outline-none border-2 border-transparent focus:border-purple-800' placeholder='Digite uma mensagem...' />
                    {
                        message != '' ?
                            <button className='hover:bg-purple-100 hover:text-purple-950 font-semibold rounded-2xl py-2 bg-purple-900 htext-white transition-colors text-center'
                                onClick={(e) => handleButton(e)}
                            >
                                Enviar
                            </button>
                            :
                            <button className=' font-semibold rounded-2xl py-2 bg-purple-950 text-white transition-colors text-center cursor-not-allowed'
                            >
                                Enviar
                            </button>
                    }
                </form>
            </div>
        </main>
    )
}

export default chat