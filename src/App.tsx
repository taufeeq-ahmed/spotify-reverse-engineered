import './App.css';
import Player from './components/app-components/audio-player';
import './index.css';

function App() {
    return (
        <div className="p-2 flex flex-col-reverse  h-screen">
            <Player />
        </div>
    );
}

export default App;
