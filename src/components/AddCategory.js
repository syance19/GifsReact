import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmbit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
        setCategories(cats=>[inputValue,...cats]);
        setInputValue('');
        }
        
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmbit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </Fragment>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}