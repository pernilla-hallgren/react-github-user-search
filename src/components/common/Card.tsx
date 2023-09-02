import { useState } from 'react';
import { UserData } from '../../services/api';

const Card = ({user}: {user: UserData}) => {
    const [selectedUser, setSelectedUser] = useState<UserData>();

    const handleOpenModal = (user: UserData) => {
        setSelectedUser(user)
        console.log({user});
        
    }

    // const handleCloseModal = () => {
    //     setSelectedUser(null);
    // }

    return (
        <div> 
            <div className='card'>
                <div className='card-image-container'>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="card-image" />
                </div>
                <div className='card-content'>
                    <h2 className='card-name'>{user.name}</h2>
                    <p className='card-username'>{user.login}</p>
                    {user.bio !== null && user.bio !== '' ? (
                        <button className='card-bio-button' onClick={() => handleOpenModal(user)}>
                            View Bio
                        </button>
                    ) : (
                        <div className='empty-placeholder'>
                            <p>No bio available 😞</p>
                        </div>
                    )}
                    <div className='card-info'>
                        <div className='card-followers'>
                            <p>{user.followers}</p>
                            <p>Followers</p>
                        </div>
                        <div className='card-repositories'>
                            <p>{user.public_repos}</p>
                            <p>Repositories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Card;
