import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  className?: string;
}

export default function CountdownTimer({ 
  initialHours = 4, 
  initialMinutes = 23, 
  initialSeconds = 14,
  className = ""
}: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset timer when it reaches 00:00:00
              hours = initialHours;
              minutes = initialMinutes;
              seconds = initialSeconds;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialHours, initialMinutes, initialSeconds]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`bg-black/80 text-white rounded-lg p-4 inline-block ${className}`}>
      <div className="text-sm font-medium mb-2">⏰ ACABA EM:</div>
      <div className="text-2xl font-bold tracking-wider">
        <span>{formatNumber(time.hours)}</span>:
        <span>{formatNumber(time.minutes)}</span>:
        <span>{formatNumber(time.seconds)}</span>
      </div>
      <div className="text-xs mt-1 opacity-75">Horas : Minutos : Segundos</div>
    </div>
  );
}
