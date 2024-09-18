import PlayerControls from './player-controls';
import TrackControls from './track-controls';

function Player() {
    const imageSource =
        'https://mainbalti.s3.ap-south-1.amazonaws.com/image_movies/7200/435949125.jpg';

    return (
        <div className="player h-[82px]  fixed bottom-2 left-0 w-full p-4 flex gap-2">
            <div className="track-details flex gap-4 justify-start items-center w-1/3">
                <img
                    src={imageSource}
                    alt=""
                    className="thumbnail h-[56px] w-[56px] rounded-sm"
                />
                <div className="details">
                    <p className="text-sm">Matarghashti</p>
                    <p className="text-xs text-[#B3B3B3]">Mohit Chauhan</p>
                </div>
            </div>
            <div className="track-controls w-1/3">
                <TrackControls />
            </div>
            <div className="player-controls w-1/3">
                <PlayerControls />
            </div>
        </div>
    );
}

export default Player;
