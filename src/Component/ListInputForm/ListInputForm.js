import React from 'react';
import './ListInputForm.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
const ListInputForm = () => {

    const { register, handleSubmit, } = useForm()

    const inputItems = [{"name":1},{"name":2},{"name":3},{"name":4},{"name":5}]
    console.log("before",inputItems);
    const [inputField, setInputField] = useState(inputItems)
    const [count,setCount] = useState(6)


    const onSubmit = data => {
         console.log(data) 
        }

    const addInputField = ()=> {
        setCount(count+1) 
        
        inputItems.push( {"name":count})

    }


    return (
        <div>
            <div className="list-input-form-area">
                
                <form onSubmit={handleSubmit(onSubmit)}>

                {
                    inputField.map(name =>  <input name={name.name} ref={register} />)
                }
                <div className="submit">
                 <button type="submit">Submit</button>
                </div>

                </form>
                <div className="add-input-field">
                 <button onClick={addInputField}>add</button>
                </div>
            </div>
        </div>
    );
};

export default ListInputForm;