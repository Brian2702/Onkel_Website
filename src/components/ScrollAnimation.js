import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ScrollAnimation = ({ children, animationClass }) => {
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current.classList.add(animationClass);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationClass]);

  return <div ref={elementRef}>{children}</div>;
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  animationClass: PropTypes.string.isRequired,
};

export default ScrollAnimation;
