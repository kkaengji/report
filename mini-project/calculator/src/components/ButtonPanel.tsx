import styles from "./ButtonPanel.module.css";

const buttonValues = [
  "C",
  "←",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const ButtonPanel = () => {
  return (
    <div className={styles.buttonPanel}>
      {buttonValues.map((btn) => (
        <button key={btn}>{btn}</button>
      ))}
    </div>
  );
};

export default ButtonPanel;
