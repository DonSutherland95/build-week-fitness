import React,{useState} from 'react'
import axios from "axios"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {useHistory} from "react-router-dom"

const initialFormValues={
    name: '',
    schedule:'',
    location: '',
    
}

export default function CreateClass() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();

    const onChange = (event) =>{
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
             [name]: value, 
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newClass={
            ...formValues
        }
        // console.log(newClass)
        axiosWithAuth()
            .post('/classes', newClass)
            .then((req)=>{
                console.log(req)
                history.push("/class-list")
            })
            .catch((err)=>{
                console.log(err)
            })

    };
    
    return (
        <div>
            <h1>Please enter the information below to create a class</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" name="name" onChange={onChange} value={formValues.name} />
                </label>
                <br />
                <br />
                <label>Schedule:
                    <input type="text" name="schedule" onChange={onChange} value={formValues.schedule} />
                </label>
                <br />
                <br />
                <label>Location:
                    <input type="text" name="location" onChange={onChange} value={formValues.location} />
                </label>
                <br />
                <br />
                <button>Next</button>
                <button>Skip</button>
            </form>
        </div>
    )
}
