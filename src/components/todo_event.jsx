import { useDispatch, useSelector } from 'react-redux'
import { otsoCity } from '../redux/todoSlice'
import { useEffect, useRef } from 'react'

export const ToDo = (props) => {
    const {data, id} = props
    const CheckBox = useRef(0)
    const Text = useRef(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        CheckBox.current.checked = data.complited
        if(data.complited==true){
            Text.current.style.textDecoration = 'line-through';
        }else{
            Text.current.style.textDecoration = 'none';
        }
    },[data.complited])
    return(<>
        <div className="todo_body">
            <p ref={Text} >{data.title}</p>
            <input type="checkbox" ref={CheckBox}  onChange={(e)=>{
                dispatch(otsoCity(id))
            }}/>
        </div>
    </>)
    
}