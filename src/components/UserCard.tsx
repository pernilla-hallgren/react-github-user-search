import React, { useState } from 'react';

interface UserCardProps {
    users: string;
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
    const [, set] = useState<string>();


    return (
        <div className='card-list-container'> 
            UserCard
        </div>  
    );
};

export default UserCard;
