import { logDOM } from '@testing-library/react'
import React from 'react'
import './App.css'
import Props from './PROPS/Props'
import SeriesData from './PROPS/SeriesData'


const App = () => {
  return (
    <div className='App'>
      <h1>Top 5 Netflix Series of 2022</h1>

      {SeriesData.map((value,index)=> {
        console.log(index)
        return (
          <Props key={value.id}
            image={value.image}
            title={value.title}
            name={value.name}
            link={value.link} />
        )
      })}
    </div>
  )
}

export default App
