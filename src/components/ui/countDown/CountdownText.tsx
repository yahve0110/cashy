import { useCountdown } from "@/hooks/useCountdown";
import styles from "./CountdownText.module.scss";

type Props = {
  targetTime: Date;
  format?: "hms" | "colon";
};

const formatTime = (num: number) => num.toString().padStart(2, "0");

const CountdownText = ({ targetTime, format = "colon" }: Props) => {
  const { hours, minutes, seconds } = useCountdown(targetTime);

  return format === "hms" ? (
    <div className={styles.hms}>
      <span>{formatTime(hours)}h</span>
      <span>{formatTime(minutes)}m</span>
      <span>{formatTime(seconds)}s</span>
    </div>
  ) : (
    <span>
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
    </span>
  );
};

export default CountdownText;
