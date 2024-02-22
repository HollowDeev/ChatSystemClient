'use client'

import React, { useState } from 'react'
import { SocketContext } from './socketContext'

export default function SocketProvider({children}) {
    const [socket, setSocket] = useState()
  return (
    <SocketContext.Provider value={[socket, setSocket]}>
        {children}
    </SocketContext.Provider>
  )
}
