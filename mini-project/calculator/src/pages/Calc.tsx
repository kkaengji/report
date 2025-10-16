import ButtonPanel from "../components/ButtonPanel";
import Display from "../components/Display";
import styles from "./Calc.module.css";

// 계산기의 전체적인 틀, 화면, 버튼 등 눈에 보이는 UI부분
const Calc = () => {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default Calc;
