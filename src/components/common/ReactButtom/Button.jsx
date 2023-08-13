import { ButtonText } from "./ButtonText";

const Button = () => {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-x-8">
      <ButtonText title={"会社名"} content={"アナイスカンパニー"} />
      <ButtonText title={"最寄り"} content={"表参道"} />
      <ButtonText title={"徒歩"} content={"約10分"} />
    </div>
  );
};

export default Button