import { createContext, useEffect, useState } from "react";

export const Animation = createContext();

const AnimationProvider = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [reveals, setReveals] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);

      const newReveals = Array.from(
        document.querySelectorAll(".reveal")
      ).filter((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 50;
        return revealTop < window.innerHeight - revealPoint;
      });

      setReveals(newReveals);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Animation.Provider value={{ isSticky }}>{children}</Animation.Provider>
  );
};

export default AnimationProvider;
