import "./button.css";

export default function Button({ btnStyle }) {
  return (
    <div className={`btns ${btnStyle.cursor + " " + btnStyle.color}_btns`}>
      {btnStyle.fa_logo ? (
        <>
          <i className={btnStyle.fa_logo} aria-hidden="true"></i> &nbsp;&nbsp;
        </>
      ) : (
        ""
      )}
      {btnStyle.text}
    </div>
  );
}
