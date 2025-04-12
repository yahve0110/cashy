import { useCountdown } from "@/hooks/useCountdown";

type Props = {
  targetTime: Date;
  format?: "hms" | "colon";
};

const formatTime = (num: number) => num.toString().padStart(2, "0");

const CountdownText = ({ targetTime, format = "colon" }: Props) => {
  const { hours, minutes, seconds } = useCountdown(targetTime);

  return format === "hms" ? (
    <>
      <span>{formatTime(hours)}h</span>
      <span>{formatTime(minutes)}m</span>
      <span>{formatTime(seconds)}s</span>
    </>
  ) : (
    <span>
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
    </span>
  );
};

export default CountdownText;
