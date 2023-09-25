export const Square = ({ value, onSquareClick }) => {
  return (
    <button className="tw-grid tw-place-items-center tw-w-16 tw-border tw-aspect-square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
