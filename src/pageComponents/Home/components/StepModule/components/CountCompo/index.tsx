import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

function getPreviousFiveNumbers(n: number) {
  const result = [n];
  for (let i = 1; i < 3; i++) {
    result.push(n - i);
  }
  return result.reverse();
}

const Counter = ({ targetNumber, className }: { targetNumber: number; className?: string }) => {
  const previousNumbers = getPreviousFiveNumbers(targetNumber);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [height, setHeight] = useState(0);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setTimeout(() => {
          setHasAnimated(true);
        }, 500);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  useEffect(() => {
    if (elementRef.current) {
      const height = elementRef.current?.clientHeight;
      setHeight(height);
    }
  }, []);

  return (
    <span className={clsx(styles.counter, className)} ref={elementRef}>
      <span
        className={styles['animate-number']}
        style={hasAnimated ? { transform: `translateY(-${height * 2}px)` } : {}}>
        {previousNumbers.map((number) => (
          <p style={{ height: `${height}px`, lineHeight: `${height}px` }} key={number}>
            {number}
          </p>
        ))}
      </span>
    </span>
  );
};

export default Counter;
