'use client'
import Button from "@/components/Button";
import Pool from "@/components/Pool";
import { useState, useRef, useEffect } from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearExistingInterval();
  }, []);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const add = () => {
    clearExistingInterval();
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);

      if (Date.now() - startTime > 12000) {
        clearExistingInterval();
      }

    }, 100);
  }

  const remove = () => {
    clearExistingInterval();
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      setCount(prev => {
        if (prev <= 0) {
          clearExistingInterval();
          return 0;
        }
        return prev - 1;
      });

      if (Date.now() - startTime > 12000) {
        clearExistingInterval();
        setCount(0);
      }

    }, 100);
  }

  const stop = () => {
    clearExistingInterval();
  }

  return (
    <div className="water-pool">
      <h1>Water Pool {count}</h1>
      <Button add={add} remove={remove} stop={stop} />
      <Pool count={count} />
    </div>
  )
}
