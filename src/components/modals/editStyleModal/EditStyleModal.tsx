import Modal from "@/components/modals/modal/Modal";
import styles from "./EditStyleModal.module.scss";
import { ICONS } from "@/assets/iconComponents/links";
import { useRef, useEffect, useState } from "react";
import FrameIcon from "@/assets/iconComponents/FrameIcon";
import BackgroundIcon from "@/assets/iconComponents/BackgroundIcon";
import StickerIcon from "@/assets/iconComponents/StickerIcon";
import BackgroundItemCard from "@/components/ui/backgroundItemCard/BackgroundItemCard";
import Tabs, { Tab } from "@/components/ui/tabs/Tabs";
import { useBackgrounds } from "@/hooks/useBackgrounds";
import UserCard from "@/components/ui/userCard/UserCard";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const EditStyleModal = ({ isOpen, onClose }: Props) => {
  type TabKey = "FRAME" | "BACKGROUND" | "STICKER";
  const [selectedTab, setSelectedTab] = useState<TabKey>("BACKGROUND");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  const { backgrounds, selectedBackground, coins, selectBackground } =
    useBackgrounds();

  const tabItems: Tab[] = [
    { key: "FRAME", label: "Frame", icon: FrameIcon },
    { key: "BACKGROUND", label: "Background", icon: BackgroundIcon },
    { key: "STICKER", label: "Sticker", icon: StickerIcon },
  ];

  const tabRefs: Record<TabKey, React.RefObject<HTMLButtonElement | null>> = {
    FRAME: useRef<HTMLButtonElement | null>(null),
    BACKGROUND: useRef<HTMLButtonElement | null>(null),
    STICKER: useRef<HTMLButtonElement | null>(null),
  };

  useEffect(() => {
    if (!isOpen) return;
    const ref = tabRefs[selectedTab].current;

    if (!hasAnimatedOnce && selectedTab === "BACKGROUND") {
      const defaultRef = tabRefs["BACKGROUND"].current;
      if (defaultRef) {
        const { offsetLeft, offsetWidth } = defaultRef;
        setIndicatorStyle({
          left: offsetLeft + offsetWidth * 0.1,
          width: offsetWidth * 0.8,
        });
      }
    }

    requestAnimationFrame(() => {
      if (ref) {
        const { offsetLeft, offsetWidth } = ref;
        setIndicatorStyle({
          left: offsetLeft + offsetWidth * 0.1,
          width: offsetWidth * 0.8,
        });
        setHasAnimatedOnce(true);
      }
    });
  }, [isOpen, selectedTab]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton={false}>
      <div className={styles.modalContent}>
        <div className={styles.modalUpper}>
          <div className={styles.modalHeader}>
            <h2 className={styles.title}>Edit My Style</h2>
            <div className={styles.stats}>
              <img src={ICONS.coin} alt="coin" className={styles.coinIcon} />
              <span className={styles.coinsAmount}>
                {coins.toLocaleString("en-US").replace(/,/g, " ")}
              </span>
            </div>
          </div>

          <UserCard background={selectedBackground} />

          <Tabs
            tabs={tabItems}
            activeTab={selectedTab}
            onChange={(key) => setSelectedTab(key as TabKey)}
            tabRefs={tabRefs}
            indicatorStyle={indicatorStyle}
            hasAnimatedOnce={hasAnimatedOnce}
          />
        </div>

        <div className={styles.tabContent}>
          {selectedTab === "BACKGROUND" && (
            <div className={styles.backgroundList}>
              {backgrounds.map((bg) => (
                <BackgroundItemCard
                  key={bg.id}
                  bg={bg}
                  isSelected={selectedBackground === bg.image}
                  onClick={() => selectBackground(bg)}
                />
              ))}
            </div>
          )}

          {selectedTab === "FRAME" && (
            <div className={styles.placeholder}>
              Frame content coming soon...
            </div>
          )}

          {selectedTab === "STICKER" && (
            <div className={styles.placeholder}>
              Sticker content coming soon...
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EditStyleModal;
