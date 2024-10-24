import { useLayoutEffect, useState } from "react";

const useViewPort = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth < 945);
  };

  useLayoutEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    height,
    isMobile,
    isLoaded,
  };
};

export default useViewPort;
