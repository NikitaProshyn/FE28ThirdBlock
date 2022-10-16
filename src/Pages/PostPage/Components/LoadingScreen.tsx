import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LoadngScreen = () => {
   const lottieScreen = useRef(null);

   useEffect(() => {
      if (lottieScreen && lottieScreen.current) {
         lottie.loadAnimation({
            container: lottieScreen.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../assets/lotties/lotieScreen.json'),
         });
      }
   }, [lottieScreen]);

   return <div ref={lottieScreen}></div>;
};

export default LoadngScreen;
