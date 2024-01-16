import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featuresData = [
  {
    title: 'Revenue growth/profit',
    text: 'The gross annual profit on capital investment will be 30-40% of revenue generated.',
  },
  {
    title: 'Our target customers',
    text: 'The business will focus on Jos Plateau State and the FCT, Abuja, because of the demand for ready-for-sale bespoke clothing by individuals and varieties of high quality textile materials in bulk by clothing businesses.',
  },
  {
    title: 'Financials/investments',
    text: 'The business is so adaptive that it is not restricted to a specific capital investment price tag. The investment capital needed for smooth operation is 50 - 150 million naira',
  },
  {
    title: 'Sustainable Fashion',
    text: 'We believe in making a positive impact on the environment. That is why LUMINA CREATIONS is committed to sustainable fashion practices. Our materials are ethically sourced, and our manufacturing processes prioritize eco-friendly methods',
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Plans For LUMINA CREATIONS</h1>
        <p>The business will increase it presence by compounding into multiple states in Nigeria
         [DIVERSIFCATION AND EXPANSION]</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features