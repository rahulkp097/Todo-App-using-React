
import './App.css';

import { useState } from 'react';


function App() {

  const [todos,setTodo]=useState([])
  const [newtodo,setNewTodo]=useState(" ")


  const addTodo=(()=>{
    if(newtodo.trim()!==""){
      const updatededTodo=[...todos,newtodo]
      setTodo(updatededTodo)
      setNewTodo("")
    }
  })

  const removeTodo=((index)=>{
    const updatededTodo=[...todos]
    updatededTodo.splice(index,1)
    setTodo(updatededTodo)
  })

  return (


    <div className="page-content page-container" id="page-content">
  <div className="padding">
    <div className="row container d-flex justify-content-center">
      <div className="col-md-12">
        <div className="card px-3">
          <div className="card-body">

            <h4 className="card-title"> Todo list  :{todos.length}</h4>
            <div className="add-items d-flex">
               
              <input
                type="text"
                value={newtodo}
                className="form-control todo-list-input"
                placeholder="What do you need to do today?"
                onChange={(e)=>setNewTodo(e.target.value)}
              />
              <button onClick={addTodo} className="add btn btn-primary font-weight-bold todo-list-add-btn">
                Add
              </button>
            </div>

        {  todos.map((todo,index)=>{

        return(
            <div className="list-wrapper" key={index}>
              <ul className="d-flex flex-column-reverse todo-list">
                <li>
                  <div className="form-check">
                      
                    <label  className="form-check-label">
                      
                     {todo}
                      <i className="input-helper" />
                    </label>
                  </div>
                  <i onClick={()=>removeTodo(index)} className="remove mdi mdi-close-circle-outline" />
                </li>
            
              </ul>
            </div>

        )})
          }


          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  );
}

export default App;
