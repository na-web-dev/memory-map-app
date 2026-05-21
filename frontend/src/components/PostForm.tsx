import "./PostForm.css";

type Props = {
  closeForm: () => void;
};

export default function PostForm(props: Props) {
  return (
    <div className="form" onClick={(e) => e.stopPropagation()}>
      <h2>思い出 登録</h2>
      <input type="text" placeholder="タイトル" />
      <textarea rows={5} placeholder="内容" />
      <select>
        <option>広島県</option>
      </select>
      <select>
        <option>ライブ</option>
      </select>
      <input type="date" />
      <button>登録</button>
      <button className="closebtn" onClick={() => props.closeForm()}>
        ✕
      </button>
    </div>
  );
}
