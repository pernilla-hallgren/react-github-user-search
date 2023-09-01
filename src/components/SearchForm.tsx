import React, { useState, useEffect } from 'react';
import CustomInput from './common/CustomInput';

interface SearchFormProps {
    value: string;
}

const SearchForm: React.FC<SearchFormProps> = ({  }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='search-form-container'>
            <div>
                <CustomInput 
                    placeholder={''} 
                    value={''} 
                    onChange={() => console.log("onChange")} 
                    onSubmit={() => console.log("onSubmit")} 
                />
            </div>
        </div>
    );
};

export default SearchForm;
