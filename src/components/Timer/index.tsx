import Button from "../Button";
import Relogio from "./Clock";
import style from './Timer.module.scss';

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button texto="Começar!">
        
      </Button>
    </div>
  )
}