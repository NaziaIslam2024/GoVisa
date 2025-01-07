import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const SliderFancy = () => {
    // const handleType = (count: words) => {
    //     // access word count number
    //     console.log(count)}
    //   }
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '28px' }}
      }
    return (
        <h1 className='font-bold md:text-3xl md:pt-7xl  lg:pl-3xl lg:pt-[100px] lg:text-7xl' >
        Life is simple{' '}
        <span className='' style={{ color: '#fff', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Travel', 'Explore', 'Fun', 'Eat']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={400}
            onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    );
};

export default SliderFancy;