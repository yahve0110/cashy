import styles from "./UserCard.module.scss";
import avatarImage from "@/assets/avatar.png";
import goldBg from "@/assets/goldBg.png";

type Props = {
    background: string;
};

const UserCard = ({ background }: Props) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.cardBackground}
                key={background}
                style={{ backgroundImage: `url(${background})` }}
            />
            <div className={styles.left}>
                <img className={styles.goldBg} src={goldBg} alt="goldBg" />
                <img className={styles.avatar} src={avatarImage} alt="Avatar" />
                <div className={styles.notification}><span>1</span></div>
            </div>
            <div className={styles.right}>
                <div className={styles.details}>
                    <span className={styles.name}>Jane Doe</span>
                    <span className={styles.points}>3,211</span>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
