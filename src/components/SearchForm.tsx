import React, { useState } from 'react';
import CustomInput from './common/CustomInput';

interface SearchFormProps {
    onSubmit: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (value: string) => {
        setSearchValue(value)
    }

    console.log({searchValue});

    const handleSearchSubmit = () => {
        onSubmit()
    }

    return (
        <div className='search-form-container'>
            <div>
                <CustomInput 
                    placeholder='Enter GitHub username' 
                    value={searchValue} 
                    onChange={handleSearchChange} 
                    onSubmit={handleSearchSubmit} 
                />
            </div>
        </div>
    );
};

export default SearchForm;
