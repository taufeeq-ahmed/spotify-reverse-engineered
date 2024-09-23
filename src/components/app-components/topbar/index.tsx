import HomeIcon from '@/assets/icons/HomeIcon';
import LogoIcon from '@/assets/icons/LogoIcon';
import SearchBar from './searchbar';
import IconButton from '../icon-button';
import BellIcon from '@/assets/icons/BellIcon';
import ProfileSettings from './profile-settings';

function Topbar() {
    return (
        <div className="top-bar flex justify-between h-12 px-4">
            <div className="logo-container flex justify-center items-center">
                <LogoIcon className="w-8 h-8" />
            </div>
            <div className="nav-and-search flex gap-2">
                <div className="home-nav bg-[#1f1f1f] p-3 rounded-full w-fit h-fit">
                    <HomeIcon className="w-6 h-6" />
                </div>
                <SearchBar />
            </div>
            <div className="user-items flex justify-center items-center gap-4">
                <IconButton icon={BellIcon} tooltipContent="What's New" />
                <ProfileSettings />
            </div>
        </div>
    );
}

export default Topbar;
