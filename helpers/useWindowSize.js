import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;
    
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Remove the dependency as it's not needed

  return width;
};

export default useWindowWidth;