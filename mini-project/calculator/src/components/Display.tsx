import styles from "./Display.module.css";

interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div className={styles.Display}>
      <div className={styles.DisplayValue}>{value}</div>
    </div>
  );
};

export default Display;
