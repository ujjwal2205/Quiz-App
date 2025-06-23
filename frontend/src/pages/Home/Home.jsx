import React from 'react'
import './Home.css'
import AvailableQuiz from '../../components/AvailableQuizes/AvailableQuiz'

function Home({setAvailableQuizes}) {
  return (
    <div>
       <AvailableQuiz setAvailableQuizes={setAvailableQuizes}/>
    </div>
  )
}

export default Home
