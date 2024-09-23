import { Avatar, AvatarFallback } from '@/components/ui/avatar';

function ProfileSettings() {
    return (
        <div className="profile-settings bg-[#1f1f1f] rounded-full p-1">
            <Avatar className="flex justify-center items-center">
                <AvatarFallback className="bg-[#509bf5] text-black w-8 h-8">
                    T
                </AvatarFallback>
            </Avatar>
        </div>
    );
}

export default ProfileSettings;
