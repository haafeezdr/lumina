import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
       <div className='gpt3__whatgpt3-feature'>
          <Feature title="What is LUMINA CREATIONS" text="LUMINA CREATIONS is a clothing brand where fashion meets comfort and style becomes a statement. We are not just a clothing brand; we are a lifestyle that celebrates individuality and embraces the confidence that comes with dressing well.We specialise in curated collection of high-quality clothing that caters to every aspect of your life. From casual everyday wear to sophisticated evening ensembles, each piece is designed with precision and crafted for comfort.
" />
       </div>
       <div className='gpt3__whatgpt3-heading'>
           <h1 className='gradient__text'>Here At LUMINA We Provide You With This Services</h1> 
          
       </div>
       <div className='gpt3__whatgpt3-container'>
          <Feature title="A show room for individual sales" text="A storefront(showroom) that will showcase our ready-for-sale products & textile materials which will also serve as the business office
." />
          <Feature title="Supply of textiles materials" text="Our focus point will be the supply of different varieties of textile materials to wholesale and retail businesses as well as events
" />
          <Feature title="Bespoke tailoring services" text="Our retail customers will be maintained by our tailoring division as clients
"  />
       </div>
    </div>
  )
}

export default WhatGPT3