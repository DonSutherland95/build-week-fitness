import React,{useState} from 'react'
import axios from "axios"

const initialFormValues={
    className: '',
    startTime:'',
    classType: '',
    classSize: '',
    classLength: '',
    classLevel: '',
    maxSize: ''
}

export default function CreateClass() {
    const [formValues, setFormValues] = useState(initialFormValues);

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
        
    };
    return (
        <div>
            <h1>Please enter the information below to create a class</h1>
            <form onSubmit={onSubmit}>
                <label>Class Name
                    <input type="text" name="className" onChange={onChange} value={formValues.className} />
                </label>
                <br />
                <br />
                <label>Start Time
                    <input type="time" id="appt" name="startTime" onChange={onChange} value={formValues.startTime} ></input>
                </label>
                <br />
                <br />
                <label> Class Type
                    <select onChange={onChange} name="classType" value={formValues.type} >
                        <option>Select</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Boxing">Boxing</option>
                        <option value="Pilates">Pilates</option>
                        <option value="Weightlifting">Weightlifting</option>
                    </select>
                </label>
                <br />
                <br />
            <label>Class Size
                <input type="number" name="classSize" onChange={onChange} value={formValues.classSize} />
            </label>
            <br />
            <br />
            <label>Class Length(in minutes)
                <input type="number" name="classLength" onChange={onChange} value={formValues.classLength} />
            </label>
            <br />
            <br />
            <label>Class Level 
                <select onChange={onChange} name="classLevel" value={formValues.classLevel} >
                        <option>Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
            </select>
            </label>
            <br />
            <br />
            <label>Location
                <input type="text" name="location" onChange={onChange} value={formValues.location} />
            </label>
            <br />
            <br />
            <label>Max Size
                <input type="number" name="maxSize" onChange={onChange} value={formValues.maxSize} />
            </label>
            <br />
            <br />
            <button>Next</button>
            <button>Skip</button>
        </form>
        </div>
    )
}
