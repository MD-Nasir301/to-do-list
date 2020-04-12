import React from 'react';
import './ListInputForm.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
const ListInputForm = () => {

    const { register, handleSubmit, } = useForm()

    const [inputField, setInputField] = useState([{"name":1},{"name":2},{"name":3},{"name":4},{"name":5}])
    const [count,setCount] = useState(6)
    const [listData,setListData] = useState([])
    console.log("aaaaaaaaaaaa", listData);


    const onSubmit = data => {
         setListData([data])
        }

    const addInputField = ()=> {
        setCount(count+1) 
        setInputField([...inputField,{"name":"name"}])
        console.log(inputField);
        // console.log("after adding", inputItems);
    }


    return (
        <div>
            <div className="list-input-form-area">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputFields">
                {
                    inputField.map(name =>  <input name="name" ref={register} />)
                }
                </div>
   
                <div className="submit">
                 <button type="submit">Submit</button>
                </div>
                </form>
              <div className="add-input-field">
                 <button onClick={addInputField}>add</button>
            </div>
            </div>
{/* 
            {
                listData.length && listData.map(data => <div className="list-box">
                    <h5> {data.name} </h5>
            </div>)
            } */}
            

        </div>
    );
};

export default ListInputForm;