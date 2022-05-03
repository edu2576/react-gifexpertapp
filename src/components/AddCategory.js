import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <>  
            <form onSubmit={hadleSubmit}>
                
                <input type="text" value={inputValue} onChange={handleImputChange}/>

            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}