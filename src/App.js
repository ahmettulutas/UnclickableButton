import React, { useEffect, useState } from "react";

const Component = () => {
  //sets the window dimensions
  const getWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height
    };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());
  //recalls the button positioning function(handleResize) when hovered
  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // evaluates window height and width
  const { height, width } = windowSize;

  const [buttonStyle, setButtonStyle] = useState({
    width: "100px",
    height: "30px",
    fontWeight: "bold",
    backgroundColor: "aquamarine",
    top: 0,
    left: 0,
    color: "blue",
    position: "absolute"
  });
  // repositions the button
  const handleHover = () => {
    const maxHeight = height - 30;
    const maxWidth = width - 100;
    setButtonStyle({
      ...buttonStyle,
      top: Math.floor(Math.random() * maxHeight),
      left: Math.floor(Math.random() * maxWidth)
    });
  };

  return (
    <div>
      <button style={buttonStyle} onMouseOver={handleHover}>
        Click Me
      </button>
    </div>
  );
};
export default Component;
