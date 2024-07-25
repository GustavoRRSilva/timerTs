import Item from "./Item/Item";
import style from "./List.module.css";
import { useState } from "react";
export default function List() {
  const[tarefas,setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "02:00:00",
    },
  ])
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={(e)=>{
        e.preventDefault();
        setTarefas([...tarefas,{tarefa:"Estudar estado",tempo:"00:00:00"}])
        console.log(tarefas)
      }}> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key = {index} 
          //Pega TODOS os atributos do item
          {...item} />
        ))}
      </ul>
    </aside>
  );
}
