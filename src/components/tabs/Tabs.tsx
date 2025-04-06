import styles from "./Tabs.module.scss";
import { ComponentType, RefObject } from "react";

export type Tab = {
    key: string;
    label: string;
    icon: ComponentType<{ color: string; size: number }>;
};

type TabsProps = {
    tabs: Tab[];
    activeTab: string;
    onChange: (key: string) => void;
    tabRefs: Record<string, RefObject<HTMLButtonElement | null>>;
    indicatorStyle: { left: number; width: number };
    hasAnimatedOnce: boolean;
};

const Tabs = ({
                  tabs,
                  activeTab,
                  onChange,
                  tabRefs,
                  indicatorStyle,
                  hasAnimatedOnce,
              }: TabsProps) => {
    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => {
                const isActive = tab.key === activeTab;
                const color = isActive ? "#000000" : "#45888B";
                const Icon = tab.icon;

                return (
                    <button
                        key={tab.key}
                        ref={tabRefs[tab.key]}
                        onClick={() => onChange(tab.key)}
                        className={`${styles.tabButton} ${isActive ? styles.active : ""}`}
                    >
                        <Icon color={color} size={24} />
                        <div>{tab.label}</div>
                    </button>
                );
            })}
            <span
                className={`${styles.tabIndicator} ${hasAnimatedOnce ? styles.animated : ""}`}
                style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
            />
        </div>
    );
};

export default Tabs;
