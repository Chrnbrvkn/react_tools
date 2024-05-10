import { useState } from 'react'
import classes from './Counter.module.scss'

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }
  console.log(classes);
  
  return (
    <div className={classes.btn}>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
