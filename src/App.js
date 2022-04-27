import React from 'react'
import './App.css'


const App = () => {


  let curDate = new Date();
  curDate = curDate.getHours();

  let greeting=''

  const style = {};

  if (curDate >=1 && curDate<12) {
    greeting="Buenos Dias ! "
    style.color="green"
  } else if (curDate >=12  && curDate <19){
    greeting="Buenas Tardes !"
    style.color="orange"
  } else{
    greeting ="Buenas Noches ! "
    style.color="grey"
  }

  return (
    <div className='App'>
  <h1> Hola Amigos ! , <span style={style}> {greeting} </span> </h1>
    </div>
  )
}

export default App
