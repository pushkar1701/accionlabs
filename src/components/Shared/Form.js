import React from 'react';

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;