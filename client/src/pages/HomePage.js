import React, { useCallback, useEffect, useState } from 'react'
import '../App.css'
import { useSocket} from '../providers/Socket'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [roomId, setRoomId] = useState('')
  const { socket } = useSocket();
  const navigate = useNavigate()

  const handleJoinedRoom = useCallback(({roomId}) => {
    console.log('room-joined', roomId)
    navigate(`/room/${roomId}`)
  } , [navigate])

  useEffect(() => {
    socket.on('joined-room' ,handleJoinedRoom)

    return () => {
      socket.off('joined-room' ,handleJoinedRoom)
    }
   }, [handleJoinedRoom, socket])
  

  const handleRoomJoin = () => {
    socket.emit('join-room', {emailId: email, roomId})
  }
  return (
    <div className='home-container'>
        <div  className='input-section'>
            <input type='text' placeholder='enter email-id' value={email} onChange={(e) =>  setEmail(e.target.value) } />     
            <input type='text' placeholder='enter roomId' value={roomId} onChange={(e) => setRoomId(e.target.value)}/>        
            <button onClick={handleRoomJoin}>Enter Room</button>
        </div>
    </div>
  )
}

export default HomePage