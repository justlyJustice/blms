import { useEffect, useState } from "react";

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState("");
  const [isHeightAttained, setIsHeightAttained] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (windowHeight > 300) {
      setIsHeightAttained(true);
    } else {
      setIsHeightAttained(false);
    }
  }, [windowHeight]);

  return { windowHeight, isHeightAttained };
};

export default useWindowHeight;
