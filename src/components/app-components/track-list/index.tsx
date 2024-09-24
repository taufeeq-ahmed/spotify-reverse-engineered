import { Track } from '@/types';
import TrackCard from '../track-card';

type Props = {
    trackList: Track[];
};

function TrackList({ trackList }: Props) {
    return (
        <div className="track-list flex flex-wrap gap-2">
            {trackList?.map(track => {
                return <TrackCard {...track} />;
            })}
        </div>
    );
}

export default TrackList;
