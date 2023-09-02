import React, { ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChange, onSubmit }) => {

    return (
        <form>
            <div className='input-wrapper'>
                <input 
                    className='input-field'
                    type='text'
                    value={value}
                    placeholder={placeholder}
                    onChange={event => onChange(event.target.value)}
                /> 
                <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon"
                    onClick={onSubmit}
                    size="lg"
                />   
            </div>
        </form>
    );
};

export default CustomInput;
