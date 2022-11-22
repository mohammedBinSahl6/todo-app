
import './App.css';
import react, {useEffect, useState} from 'react'
import Todo from './components/Todo';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import {db} from './firebase'
function App() {
 const [todos, setTodos] = useState([])
 const [input , setinput] = useState('')
 useEffect(()=>{
  const q = query(collection(db , 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot)=> {
    let todoar = [];
    querySnapshot.forEach((doc)=>{
      todoar.push({...doc.data(),id : doc.id})
    });
    setTodos(todoar)
  })
  return ()=> unsubscribe()
 },[])

const deleteTodo = async (id)=>{
  await deleteDoc(doc(db, 'todos', id))
}
 const toggleComplete = async (todo)=>{
  await updateDoc(doc(db,'todos', todo.id), {
    completed : !todo.completed
  })
 }

 const createTodo = async (e)=>{
  e.preventDefault(e);
  if(input === ''){
    alert('please enter some valid todo')
  }else{
    await addDoc(collection(db, 'todos'),{
      text : input,
      completed : false
    }
    )
    setinput('')
  }
   
 }
  return (
    <div className='container-fluid'>
      <div className="f-holder">
      <div className='m-5 p-5 bg-dark text-white'>
        <div className="row">
          <h2 className='text-center'>To Do List</h2>
        </div>
        <div className="row">
          <div className="f-holder">
            <form onSubmit={createTodo}>
            <input value={input} onChange={(e)=>setinput(e.target.value)} className='todo-input' type='text' placeholder='Add Task'/> 
            <button className='btn btn-light m-3' type='submit'><i className="bi bi-plus-circle-fill"></i> Add</button> 
          
            </form>
            </div>
        </div>
      </div>
     
      
      </div>
      <h4 className='text-center'>You have {todos.length} todos</h4>
      <div className="container mt-5 ">
      {todos.map((todo ,index)=>(
        <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
      </div>
      
    </div>
  )
}

export default App;
