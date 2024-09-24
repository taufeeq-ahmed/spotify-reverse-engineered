import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TabCard from '../tab-card';
import TrackList from '../track-list';
import { testingPlayList } from '@/testing-playlist';

function ContentCatalog() {
    return (
        <TabCard
            className="h-full p-0"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, #541b15, #1e1720, #121212 ,#121212)',
            }}
        >
            <div className="catalog-control-tabs p-4">
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="songs">Songs</TabsTrigger>
                        <TabsTrigger value="albums">Albums</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <TrackList trackList={testingPlayList} />
                    </TabsContent>
                    <TabsContent value="songs">Songs</TabsContent>
                    <TabsContent value="albums">Albums</TabsContent>
                </Tabs>
            </div>
        </TabCard>
    );
}

export default ContentCatalog;
