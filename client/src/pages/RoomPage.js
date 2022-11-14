import React, { useCallback, useEffect, useState } from 'react'
import {useSocket} from '../providers/Socket'
import {usePeer } from '../providers/Peer'
import ReactPlayer from 'react-player'

const RoomPage = () => {
    const { socket } = useSocket();
    const [myStream, setMyStream] = useState(null)
    const [remoteEmailId, setRemoteEmailId] = useState()
    const { peer, createOffer, createAnswer, setRemoteAnswer, remoteStream ,sendStream} = usePeer();

      console.log(remoteStream );
    // useEffect(() => {
    // },[remoteStream])

    const handleUserJoined = useCallback(async(data) => {
        const {emailId} = data
        console.log('new user joined',emailId)
        const offer =await createOffer();
        socket.emit('call-user', {emailId, offer})
        setRemoteEmailId(emailId)
      // sendStream(myStream)

    }, [])
    
    const handleIncommingCall = useCallback(async(data) => {
      const {from, offer} = data
      console.log('incomming-call from', from, offer)
      const ans = await createAnswer(offer);
      socket.emit('call-accepted', {emailId: from, ans })
      setRemoteEmailId(from)
    }, [])

    const handleCallAccepted = useCallback(async(data) => {
      const {ans} = data;
      console.log('call got accepted', ans)
      // sendStream(myStream)
      await setRemoteAnswer(ans)
    }, [])

    const handleNegosiation = useCallback(async() => {
      console.log('nego please');
      const localOffer = await peer.createOffer();
      socket.emit('call-user', {emailId: remoteEmailId, offer: localOffer})
      console.log('nego done', localOffer)
    }, [])

    useEffect(() => {
      socket.on('user-joined', handleUserJoined)
      socket.on('incomming-call', handleIncommingCall)
      socket.on('call-accepted', handleCallAccepted)
      
      return () => {
        socket.off('user-joined', handleUserJoined)
        socket.off('incomming-call', handleIncommingCall)
        socket.off('call-accepted', handleCallAccepted)
      }
      
    }, [peer, socket])
    
    
    useEffect(() => {
      peer.addEventListener('negotiationneeded', handleNegosiation )

      return () => {
        peer.removeEventListener('negotiationneeded', handleNegosiation )
      }
    }, [handleNegosiation, peer])

    const getUserMediaStream = useCallback(async() => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      sendStream(stream)
      setMyStream(stream)
    }, [sendStream])


    useEffect(() => {
        getUserMediaStream()
    }, [getUserMediaStream ,handleNegosiation])
    

  return (
    <>
      <div>RoomPage</div>
      <p>you are connected to {remoteEmailId}</p>
      <button onClick={e => sendStream(myStream)}>send my video</button>
      <ReactPlayer url={myStream} playing muted/>
      <ReactPlayer url={remoteStream} playing/>
    </>
  )
}

export default RoomPage