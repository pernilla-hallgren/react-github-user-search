import { useState } from 'react';
import CustomInput from './common/CustomInput';
import Card from './common/Card';
import { getUserData, UserData } from '../services/api';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<UserData | null>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSearchSubmit = async () => {
        setIsLoading(true);
        setError(null);
        const fetchedUserData = await getUserData(searchValue);
        if (!fetchedUserData.message) {
            setUserData(fetchedUserData);
        } else {
            setError(fetchedUserData.response.data.message);
        }
        setIsLoading(false);
        setSearchValue('');
    };

    console.log(error);

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
                {error && <p className='error-msg'>User {error}</p>}
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
