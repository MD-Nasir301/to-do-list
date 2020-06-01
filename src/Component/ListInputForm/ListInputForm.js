import React from 'react';
import './ListInputForm.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
const ListInputForm = () => {

     const getData =  JSON.parse(localStorage.getItem('data'))

    const { register, handleSubmit, } = useForm()   

    const [inputField, setInputField] = useState([{"name":1},{"name":2},{"name":3},{"name":4},{"name":5}])
    const [count,setCount] = useState(0)

    const data = [
        {
            1: "Babu",
            2: "Nasir",
            3: "sdfsaf",
            4: "Basadfasdfasdfbusdfsfsdfsd",
            5: "Baasdfasbufsadfsadfsdfsdfa",
            6: "asdfasdfas dfsadlfsafsaffks",
        },
        {
            1: "sdfsf",
            2: "Nasir",
            3: "sdfsaf",
            4: "Basadfasdfasdfbu",
            5: "Baasdfasbu",
        },
        {
            1: "fadsf",
            2: "Nasir",
            3: "sdfsaf",
            4: "Basadfasdfasdfbu",
            5: "Baasdfasbu",
        },
    ]

    const [dat ,setDat] = useState([])

    const onSubmit = data => {
        
           setDat([...dat,data]) 
           localStorage.setItem("data",JSON.stringify(dat))

           document.getElementById("myForm").reset();
           
        }

    const addInputField = ()=> {
        setCount(count+1) 
        setInputField([...inputField,{"name": count}])
    }


    return (
        <div>
            <div className="list-input-form-area">
                
                <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputFields">
                {
                    inputField.map(name =>  <input id="a" name={name.name} ref={register} />)
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

            <div id="list-box-area">
                {
                getData ?  getData.map(item => <div className="list-box">  
                            {
                            Object.keys(item).map((a,b) => <li> { item[a]} </li> )
                            } 
                        </div>) : <div></div>
                }
            </div>


        </div>
    );
};
export default ListInputForm;