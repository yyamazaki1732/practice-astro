

// jsでクラスを定義
// そのスコープが対象コンポーネントの外に出る事はない
const buttonStyle = {
  display: "flex",
  justifyContent: "spaceBetween",
  alignItems: "center",
  padding: "8px 12px",
  backgroundColor: "skyblue",
  borderRadius: "24px",
  columnGap: "12px",
};

export const ButtonText = (props) => {
  return (
    <div style={buttonStyle}>
      <h1 className="tw-text-base tw-text-orange-200">{props.title}</h1>
      <h2 className="tw-text-base">{props.content}</h2>
    </div>
  );
};

// export default ButtonText;
