import { useRef, useCallback } from "react";

export const useSound = (url: string, volume: number = 0.5) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
      audioRef.current.volume = volume;
    } else {
      audioRef.current.currentTime = 0;
    }

    audioRef.current.play().catch(() => {});
  }, [url, volume]);

  return play;
};
