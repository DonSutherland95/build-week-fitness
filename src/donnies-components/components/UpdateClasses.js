import React,{useContext, useState, useEffect} from 'react'
import {ClassContext} from "../contexts/ClassContext"
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialItem = {
    name: '',
    schedule:'',
    location:''
}

export default function UpdateClasses() {
    const [item, setItem] = useState(initialItem);
    const {classesStored, setClasses} = useContext(ClassContext)
    const { id } = useParams();
    const { push } = useHistory();



    useEffect(() => {
        axiosWithAuth()
          .get(`https://anywhere-fitness.herokuapp.com/classes/${id}`)
          // .get(`http://localhost:5000/api/movies/`)
          .then(res => {
            // console.log(res.data)
            // setItem(res.data);
            // setItem({
            //   ...item, title: res.data.title,
            //            director:res.data.director,
            //            metascore:res.data.metascore,
            //            stars:[...res.data.stars]
            // })
            setItem(res.data)
            // console.log(res)

          })
          .catch(err=>{
            console.log(err);
          })
      }, []);

      const handleDelete = ()=>{
        axiosWithAuth()
            .delete(`https://anywhere-fitness.herokuapp.com/classes/${id}`)
            .then((res)=>{
                console.log(res)
          
                console.log("hi from delete")
                push("/class-list")

            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const onChange = (event) =>{
        const {name, value} = event.target;
        setItem({
            ...item,
             [name]: value, 
        });
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        const newItem={
            ...item
        }
        // console.log(newClass)
        axiosWithAuth()
            .put(`https://anywhere-fitness.herokuapp.com/update-class/${id}/update`, newItem)
            .then((req)=>{
                // console.log(req)
                setClasses([...classesStored, req.data])
                push("/class-list")
            })
            .catch((err)=>{
                console.log(err)
            })

    };

    return (
        <form>
                <label>Name:
                    <input type="text" name="name" onChange={onChange} value={item.name} />
                </label>
                <br />
                <br />
                <label>Schedule:
                    <input type="text" name="schedule" onChange={onChange} value={item.schedule} />
                </label>
                <br />
                <br />
                <label>Location:
                    <input type="text" name="location" onChange={onChange} value={item.location} />
                </label>
                <br />
                <br />
                <button onClick={onSubmit}>Submit</button>
                <button onClick={handleDelete}>Delete</button>
            </form>
        // <div>
        // <h1>from updated form</h1>
        // </div>
        
    )
}
