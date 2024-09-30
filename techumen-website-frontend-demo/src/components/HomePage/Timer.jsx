import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-12T23:59:59").getTime(); // Replace with your target date
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center h-28 w-28 bg-gradient-to-tr from-slate-500 to-slate-100 p-6 rounded-full mx-2">
        <span className="text-5xl font-extrabold font-sans text-neutral-900 acme-font">
          {timeLeft[interval].toString().padStart(2, "0")}
        </span>
        <span className="text-neutral-800 font-bold capitalize tracking-tight acme-font">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center py-10">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Timer;
