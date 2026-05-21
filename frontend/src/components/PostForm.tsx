import "./PostForm.css";

type Props = {
  closeForm: () => void;
};

export default function PostForm(props: Props) {
  return (
    <div className="form" onClick={(e) => e.stopPropagation()}>
      <h2>思い出登録</h2>
      <div className="form-row">
        <label>タイトル</label>
        <input type="text" placeholder="タイトル" />
      </div>
      <div className="form-row">
        <label>日付</label>
        <input type="date" />
      </div>
      <div className="form-row">
        <label>内容</label>
        <textarea rows={5} cols={50} placeholder="内容" />
      </div>
      <div className="form-row">
        <label>都道府県</label>
        <select>
          <option>広島県</option>
        </select>
      </div>
      <div className="form-row">
        <label>タグ</label>
        <select>
          <option>ライブ</option>
        </select>
      </div>
      <div className="button-area">
        <button className="submitbtn">登録</button>
      </div>
      <button className="closebtn" onClick={() => props.closeForm()}>
        ✕
      </button>
    </div>
  );
}
