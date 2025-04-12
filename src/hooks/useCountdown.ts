import { useEffect, useState } from "react";

export const useCountdown = (targetTime: Date) => {
  const getRemainingTime = () => {
    const totalMs = targetTime.getTime() - new Date().getTime();

    const seconds = Math.floor((totalMs / 1000) % 60);
    const minutes = Math.floor((totalMs / 1000 / 60) % 60);
    const hours = Math.floor(totalMs / 1000 / 60 / 60);

    return { totalMs, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const time = getRemainingTime();

      if (time.totalMs <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, totalMs: 0 });
      } else {
        setTimeLeft(time);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return timeLeft;
};
