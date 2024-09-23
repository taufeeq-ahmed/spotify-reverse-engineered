import LibraryIcon from '@/assets/icons/LibraryIcon';
import TabCard from '../tab-card';

function UserLibrary() {
    return (
        <TabCard className="h-full">
            <div className="controls opacity-75 hover:opacity-100">
                <div className="heading-section flex gap-2">
                    <LibraryIcon className="w-6 h-6 " />
                    <div className="text-base font-semibold">Your Library</div>
                </div>
                <div>{/* tabs */}</div>
                <div>{/* list items */}</div>
            </div>
        </TabCard>
    );
}

export default UserLibrary;
