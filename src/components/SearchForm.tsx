import { ChangeEvent, FormEvent, useState } from 'react';
import CustomInput from './common/CustomInput';
import Card from './common/Card';
import useAxios from '../hooks/useAxios';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data, isLoading, error, errorMsg, errorStatus, getUserData } = useAxios(searchValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await getUserData();
        setSearchValue('');
    };

    return (
        <div>        
            <div className='search-form-container'>
                <div>
                    <CustomInput 
                        placeholder='Enter GitHub username' 
                        value={searchValue} 
                        onChange={handleChange} 
                        onSubmit={handleSearchSubmit} 
                    />
                </div>
            </div>
            <div>
                {isLoading && <h3 className='loading-text'>Loading...</h3>}
                {errorStatus === 404 && errorMsg && <p className='error-msg'>User {errorMsg}</p>}
                {errorStatus === 500 && <p className='error-msg'>Internal server error</p>}
                {errorStatus !== 404 && errorStatus !== 500 && error && (
                    <p className='error-msg'>An error occurred: {errorMsg}</p>
                )}
            </div>
            <div className='card-container'>
                {data && (
                    <Card user={data} />
                )}
            </div>
        </div>
    );
};

export default SearchForm;
