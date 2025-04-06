import { useState } from "react";
import { BackgroundItem, backgroundData } from "@/data/backgrounds";
import { useSound } from "@/hooks/useSound";
import { SOUND_EFFECTS } from "@/constants/sounds";

export const useBackgrounds = () => {
    const [backgrounds, setBackgrounds] = useState<BackgroundItem[]>(backgroundData);
    const [selectedBackground, setSelectedBackground] = useState(
        () => backgroundData.find(b => b.status === "selected")?.image || backgroundData[0].image
    );
    const [coins, setCoins] = useState(260);

    const playSelectSound = useSound(SOUND_EFFECTS.SELECT);
    const playPurchaseSound = useSound(SOUND_EFFECTS.PURCHASE);
    const playErrorSound = useSound(SOUND_EFFECTS.ERROR);

    const selectBackground = (bg: BackgroundItem) => {
        if (bg.status === "locked") return;

        if (bg.status === "buy") {
            if (coins >= (bg.price || 0)) {
                setCoins(prev => prev - (bg.price || 0));
                setBackgrounds(prev =>
                    prev.map(b =>
                        b.id === bg.id ? { ...b, status: "owned" } : b.status === "selected" ? { ...b, status: "owned" } : b
                    )
                );
                setSelectedBackground(bg.image);
                playPurchaseSound();
            } else {
                playErrorSound();
            }
            return;
        }

        if (bg.status === "owned" || bg.status === "selected") {
            setBackgrounds(prev =>
                prev.map(b => ({
                    ...b,
                    status: b.id === bg.id ? "selected" : b.status === "selected" ? "owned" : b.status,
                }))
            );
            setSelectedBackground(bg.image);
            playSelectSound();
        }
    };

    const resetBackgrounds = () => {
        setBackgrounds(backgroundData);
        setCoins(260);
        setSelectedBackground(backgroundData.find(b => b.status === "selected")?.image || backgroundData[0].image);
    };

    return {
        backgrounds,
        selectedBackground,
        coins,
        selectBackground,
        resetBackgrounds,
    };
};
