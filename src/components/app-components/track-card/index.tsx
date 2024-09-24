import { Track } from '@/types';
import IconButton from '../icon-button';
import PlayIcon from '@/assets/icons/PlayIcon';

function TrackCard({ title, artist, thumbnail }: Track) {
    return (
        <div className="track-card w-[50%] md:w-[16.6%] p-3 group hover:bg-[#4545457A] flex flex-col gap-3 rounded-md">
            <div className="thumbnail w-full aspect-square rounded-md overflow-hidden shadow-md relative">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="play-button-container absolute bottom-1 right-2 hidden group-hover:block group-hover:bottom-2 transition-all duration-300">
                    <IconButton
                        icon={PlayIcon}
                        tooltipContent={'Play ' + title}
                        buttonClassName="bg-primary p-3 h-fit rounded-full enabled:hover:bg-primary transition-all duration-300"
                        iconClassName="text-black w-5 h-5 shadow-lg transition-all duration-300"
                    />
                </div>
            </div>
            <div className="track-details">
                <h3 className="title text-base text-white">{title}</h3>
                <p className="artist text-sm text-[#b3b3b3]">{artist}</p>
            </div>
        </div>
    );
}

export default TrackCard;
