import { ButtonText } from "./ButtonText";
import classes from "./Button.module.scss";

export const ReactButton = () => {
  return (
    <div className={classes.wrapper}>
      <ButtonText title={"会社名"} content={"アナイスカンパニー"} />
      <ButtonText title={"最寄り"} content={"表参道"} />
      <ButtonText title={"徒歩"} content={"約10分"} />
    </div>
  );
};
