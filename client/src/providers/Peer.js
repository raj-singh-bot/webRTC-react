import React, { useMemo, useEffect, useState, useCallback }  from "react";

const PeerContext = React.createContext(null);

export const usePeer = () => {
    return React.useContext(PeerContext)
}

export const PeerProvider = (props) => {
    const [remoteStream, setRemoteStream] = useState(null)
    const peer = useMemo(() => new RTCPeerConnection({
        iceServers: [
             {
                urls: [
                    'stun:stun.l.google.com:19302',
                    'stun:global.stun.twilio.com:3478'
                ]
             }
        ]
    }), []);

    const createOffer = async () => {
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        return offer
    }

    const createAnswer = async (offer) => {
        await peer.setRemoteDescription(offer)
        const answer = await peer.createAnswer()
        await peer.setLocalDescription(answer)
        return answer;
    }

    const setRemoteAnswer = async(ans) => {
        await peer.setRemoteDescription(ans)
    }
    const sendStream = async(stream) => {
        console.log('send stream',stream)
        const tracks = stream.getTracks()
        for(const track of tracks){
            peer.addTrack(track, stream)
        }
    }
    const handleTrackEvent = useCallback((e) => {
        const streams = e.streams;
            setRemoteStream(streams[0])
            // console.log(streams)
    console.log('remote stream',streams)

    }, [])

    useEffect(() => {
        peer.addEventListener('track', handleTrackEvent)
        
        return () =>{
            peer.removeEventListener('track', handleTrackEvent)
        } 
    },[handleTrackEvent, peer])

    
    console.log('remote stream',remoteStream)
    return(
        <PeerContext.Provider value={{peer, createOffer, createAnswer, setRemoteAnswer, sendStream, remoteStream}}>
            {props.children}
        </PeerContext.Provider>
    )
}