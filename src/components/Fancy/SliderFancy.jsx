import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const SliderFancy = () => {
    // const handleType = (count: words) => {
    //     // access word count number
    //     console.log(count)}
    //   }
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }
    return (
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '28px' }}>
        Life is simple{' '}
        <span style={{ color: '#000', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Travel', 'Explore', 'Enrich Knowledge', 'Fun', 'Eat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={500}
            onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    );
};

export default SliderFancy;