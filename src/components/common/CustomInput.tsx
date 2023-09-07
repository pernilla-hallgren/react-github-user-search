import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CustomInput = ({ placeholder, value, onChange, onSubmit }: CustomInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])


    return (
        <form onSubmit={onSubmit}>
            <div className='input-wrapper'>
                <input 
                    className='input-field'
                    type='text'
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={inputRef}
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
