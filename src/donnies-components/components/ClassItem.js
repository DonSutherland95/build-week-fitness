import React,{useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import {ClassContext} from "../contexts/ClassContext"
import axios from "axios"
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function ClassItem(props) {
    const { push } = useHistory();
    const {classesStored, setClasses} = useContext(ClassContext)

  
    return (
        <div>
            <h1>{props.items.name}</h1>
            {/*<button onClick={()=>push(`/update-class/${props.item.id}`)} >view</button>*/}
            {<button onClick={()=>push(`/update-class/${props.items.id}`)} >view</button>}
            {/*<button onClick={console.log(props.items.id)} >view</button>*/}
            {/*console.log(classesStored.item)*/}
            <button onClick={()=>push(`/update-class/${props.items.id}`)}>delete</button>


        </div>
    )
}
