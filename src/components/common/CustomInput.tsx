import React, { ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <div className='input-wrapper'>
                <input 
                    className='input-field'
                    type='text'
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                /> 
                <button className='input-button'>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="search-icon"
                        size="lg"
                    />   
                </button>
            </div>
        </form>
    );
};

export default CustomInput;
