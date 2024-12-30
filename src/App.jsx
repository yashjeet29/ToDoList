import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setToDolist] = useState([]);

  const saveToDoList = (event) => {
    const toname = event.target.toname.value;
    // alert(toname)
    if (!todolist.includes(toname)) {
      const finalDoList = [...todolist, toname];
      setToDolist(finalDoList);
    } else {
      alert("Already enter....");
    }

    event.preventDefault();
  };


    const list=todolist.map((value,index)=>{
      return(

        <ToDoListItems value={value} key={index} indexNumber={index} 
        todolist={todolist}
        setToDolist={setToDolist}/>
      )
    })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="Enter Here" />{" "}
        <button>Save</button>
      </form>

      <div className="outerdiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setToDolist}){

  const [status,setStatus] = useState(false)
 const deleteRow=()=>{
  const finalData=todolist.filter((v,i)=>i!=indexNumber)
  setToDolist(finalData)

  const check =()=>{

    setStatus(!status)
    console.log(status)

  }
 }
  return(

    <li > 

    {indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>
  )
}