import { useState } from 'react';
import './App.css';
export default function APP(){

  return(
    <div>

     <div className='intro'>
     <h1>History of 5 Years <br></br> &darr;</h1>
     </div>
     <div className='timeline'>
     <ul>
      <li>
      <div className='year'>   
      <h2>2000</h2></div>
      <div className='time1'><p >The year brought the 50th anniversary of the country's democratic Constitution and saw Atal Bihari Vajpayee become the longest-serving non-Congress prime minister in Indian history. One might therefore view 2000 as a year in which India finally outgrew dynastic politics and one-party dominance.</p></div>
      </li>

      <li>
      <div className='year'>
      <h2>2005</h2></div>
      <div className='time1'><p>The Superjumbo jet aircraft Airbus A380 makes its first flight from Toulouse. Microsoft releases the Xbox 360 gaming console in North America. The Spanish flu virus is reconstructed and shown to be closely related to the Avian flu virus.</p></div>
      </li>

      <li>
      <div className='year'>
        <h2>2010</h2></div>
          <div className='time1'><p >The 2010 Chile earthquake was one of the strongest recorded in history; The Eruption of Eyjafjallajökull in Iceland disrupts air travel in Europe; A scene from the opening ceremony of the 2010 Winter Olympics in Vancouver, British Columbia, Canada; The Deepwater Horizon drilling rig explosion..</p></div>
      </li>

      <li>
      <div className='year'>
        <h2>2015</h2></div>
          <div className='time1'><p >The year 2015 brought economic growth, with our unemployment rate dropping to five percent; the normalization of our relations with Cuba and a newly opened U.S. Embassy in Havana; and a historic agreement in Paris to take real action on climate change.</p></div>
      </li>

      <li>
      <div className='year'>
       <h2 >2020</h2></div>
       <div className='time1'><p >2020 (MMXX) was a leap year starting on Wednesday of the Gregorian calendar, the 2020th year of the Common Era (CE) and Anno Domini (AD) designations, the 20th year of the 3rd millennium and the 21st century, and the 1st year of the 2020s decade</p></div>
      </li>

      <li>
      <div className='year'>
        <h2 >2025</h2></div>
        <div className='time1'><p>Union Home Minister Amit Shah on Saturday said that India will become a $5 trillion economy by 2025, and the third largest economy in the world by 2027. “In the last eight years, India has achieved the feat of becoming the 5th largest economy from the 11th rank it held earlier, leaving Britain behind," he said.</p></div>
      </li>
      </ul>
    </div>  
  



</div>
  )
}