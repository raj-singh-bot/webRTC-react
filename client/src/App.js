import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import { SocketProvider } from './providers/Socket';
import {PeerProvider } from './providers/Peer'
// import Line, { } from './pages/Line'

function App() {
  return (
    <div className="App">
        <SocketProvider>
          <PeerProvider>
            <Routes>
            {/* <Route path="/" element={<Line />}/> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />
            </Routes>
          </PeerProvider>
        </SocketProvider>
    </div>
  );
}

export default App;
