import * as React from 'react';
import { useEffect, useState } from 'react';

interface ClockProps {}

const Clock: React.FC<ClockProps> = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p style={{fontSize: "35px", color:'rgb(255,0,255)'}}>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;