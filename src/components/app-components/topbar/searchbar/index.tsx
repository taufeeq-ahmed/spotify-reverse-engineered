import BrowseIcon from '@/assets/icons/BrowseIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import { Input } from '@/components/ui/input';

function SearchBar() {
    return (
        <div className="search-bar bg-[#1f1f1f] flex justify-center items-center p-4 rounded-full w-[412px] ">
            <SearchIcon className="w-6 h-6" />
            <Input
                className="bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-transparent text-base"
                placeholder="What do you wnat to play?"
            />
            <div className="browse-container border-l-[1px] p-2 py-0 pr-0">
                <BrowseIcon className="w-6 h-6 " />
            </div>
        </div>
    );
}

export default SearchBar;
