import React, { useRef, useEffect } from 'react';
import '../assets/css/popup.css';

export default function PopupContainer(props) {
  const { toggle } = props;
  const divRef = useRef(null);

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
      toggle();
    }
  };

  return (
    <>
      {props.html}
    </>
  )
}