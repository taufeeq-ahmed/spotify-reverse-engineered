function NowPlaying() {
    const imageSource =
        'https://mainbalti.s3.ap-south-1.amazonaws.com/image_movies/7200/435949125.jpg';
    return (
        <div className="track-details flex gap-4 justify-start items-center w-[30%] pl-2">
            <img
                src={imageSource}
                alt="now-playing"
                className="thumbnail h-[56px] w-[56px] rounded-sm"
            />
            <div className="details">
                <p className="text-sm">Matarghashti</p>
                <p className="text-xs text-[#B3B3B3]">Mohit Chauhan</p>
            </div>
        </div>
    );
}

export default NowPlaying;
