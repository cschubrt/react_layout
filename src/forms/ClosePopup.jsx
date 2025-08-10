import React, { useRef, useEffect } from 'react';

function handle() {
  const { toggle } = props;
  const divRef = useRef(null);

  //MOVE TO COMPONENT
  //attach listener for click outside of our dynamic div
  useEffect(() => {
    document.addEventListener('mousedown', handleBoundary);
    return () => {
      //cleanup
      document.removeEventListener('mousedown', handleBoundary);
    }
  }, []);

  const handleBoundary = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      //clicked outside the div
      console.log('Clicked outside the div!');
      toggle();
    }
  };
}