import { useState } from 'react';
import CustomInput from './common/CustomInput';
import Card from './common/Card';
import { getUserData, UserData } from '../services/api';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<UserData | null>();
    const [isLoading, setIsLoading] = useState(false);
    const [userNotFoundError, setUserNotFound] = useState(null);
    const [unexpectedError, setUnexpectedError] = useState(null);
    
    const handleSearchSubmit = async () => {
        setUserData(null);
        setIsLoading(true);
        setUserNotFound(null);
        setUnexpectedError(null);
        
        const fetchedUserData = await getUserData(searchValue);
        if (!fetchedUserData.message) {
            setUserData(fetchedUserData);
        } else if (fetchedUserData.response.status === 404) {
            setUserNotFound(fetchedUserData.response.data.message);
        } else {
            setUnexpectedError(fetchedUserData.response.data.message)
        }
        setIsLoading(false);
        setSearchValue('');
    };

    return (
        <div>        
            <div className='search-form-container'>
                <div>
                    <CustomInput 
                        placeholder='Enter GitHub username' 
                        value={searchValue} 
                        onChange={value => setSearchValue(value)} 
                        onSubmit={handleSearchSubmit} 
                    />
                </div>
            </div>
            <div>
                {isLoading && <h3 className='loading-text'>Loading...</h3>}
                {userNotFoundError && <p className='error-msg'>User {userNotFoundError}</p>}
                {unexpectedError && <p className='error-msg'>{unexpectedError}</p>}
            </div>
            <div className='card-container'>
                {userData && (
                    <Card user={userData} />
                )}
            </div>
        </div>
    );
};

export default SearchForm;
