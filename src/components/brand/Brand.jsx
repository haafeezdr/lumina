import React from 'react'
import './brand.css'
import { A, B, C, D, E} from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={A} alt="A" width={200} height={200}/>
      </div>
      <div>
        <img src={B} alt="B" width={200} height={200}/>
      </div>
      <div>
        <img src={C} alt="C" width={200} height={200}/>
      </div>
      <div>
        <img src={D} alt="D" width={200} height={200}/>
      </div>
      <div>
        <img src={E} alt="E" width={200} height={200}/>
      </div>
    </div>
  )
}

export default Brand