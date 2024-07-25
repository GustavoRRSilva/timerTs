import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

export default function Form() {
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00",
  });

  const adicionarTarefa = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(state)
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          onChange={(e) => setState({ ...state, tarefa: e.target.value })}
          value={state.tarefa}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          onChange={(e) => setState({ ...state, tempo: e.target.value })}
          value={state.tempo}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button texto="Adicionar" />
    </form>
  );
}
