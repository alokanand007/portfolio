import React from 'react'
import pngwing from "../assets/pngwing.png"

function AboutMe() {
  return (
    <div  className="" id="about-section">
      <div className="flex justify-center mb-20 ">
  <h1 className="font-skill skill-heading">About me </h1>
</div>
{/* main div */}
<div className='grid grid-cols-2 gap-x-10	px-24'>

<div className='grid-rows-2 mt-3 ' >
  <div>

  
<p className='font-about'>Hi! everyone my name is Alok and I am currently pursuing
   my Bachelor's degree at Dyal singh college in Karnal.
   My journey so far has working in front-end development, where I've gained 
   knowledge about databases and frameworks.  
   To keep my self updated in this field i read articles and blogs.
  <br/>
  <br/>
  </p>
  </div>
  <div>

  <p className='font-about'>
  Besides programming , I often spend my free time watching movies
  and playing online games. I've been striving to acquire more knowledge in order to achieve 
  my aspirations of becoming a web developer.
</p>
</div>
</div>

{/* pic */}
<div className='grid-cols-1 ml-8'>
<img src={pngwing}></img>
</div>




</div>
    </div>
  )
}

export default AboutMe;









