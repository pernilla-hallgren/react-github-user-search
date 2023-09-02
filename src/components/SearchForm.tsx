import { useState } from 'react';
import CustomInput from './common/CustomInput';
import Card from './common/Card';
import { getUserData, UserData } from '../services/api';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<UserData | null>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    
    const handleSearchSubmit = async () => {
        setIsLoading(true);
        setError(null);
        console.log('click', searchValue);
        try {
            const fetchedUserData = await getUserData(searchValue);

            if (fetchedUserData !== null) {
                setUserData(fetchedUserData);
            } else {
                setError(new Error('User not found'));
            }
        } catch (error: any) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    console.log({userData});

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
            <div className='card-container'>

            </div>
        </div>
    );
};

export default SearchForm;
