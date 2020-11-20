import React,{useContext} from 'react'
import ClassItem from "./ClassItem"
import {ClassContext} from "../contexts/ClassContext"
export default function Classes(props) {

    const {classesStored} = useContext(ClassContext)
    const edit = (e) =>{
        console.log(e.target)
    }
    const remove = (e) =>{
        console.log(e.target)
    }
    return (
        <div>
            <h1>List of classes created</h1>
            <p>{/*console.log(classesStored)*/}</p>
            {classesStored.map((item)=>( 
                /*<div>
                    <h1>{item.name}</h1>
                    <button onClick={edit} >edit</button>
                    <button onClick={remove} >delete</button>
                </div>  */
                <div>
                    <ClassItem items={item}  />
        
                </div>    
                

            ))}
        </div>
    )
}
