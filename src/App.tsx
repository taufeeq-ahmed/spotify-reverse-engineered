import './App.css';
import Player from './components/app-components/audio-player';
import ContentCatalog from './components/app-components/content-catalog';
import Topbar from './components/app-components/topbar';
import UserLibrary from './components/app-components/user-library';
import './index.css';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';

function App() {
    return (
        <div className="h-screen p-2 max-h-screen flex flex-col justify-between">
            <Topbar />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    className="h-full p-2"
                    defaultSize={25}
                    minSize={20}
                    maxSize={35}
                >
                    <UserLibrary />
                </ResizablePanel>
                <ResizableHandle className="bg-[#1f1f1f] opacity-0 " />
                <ResizablePanel className="h-full p-2" defaultSize={75}>
                    <ContentCatalog />
                </ResizablePanel>
            </ResizablePanelGroup>
            <div className="p-2 flex flex-col-reverse">
                <Player />
            </div>
        </div>
    );
}

export default App;
