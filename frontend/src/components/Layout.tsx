import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Memory Map</h2>
        <h3>一覧</h3>
        <h3>カレンダー</h3>
      </aside>

      <main className="map-area">
        <h1>日本地図エリア</h1>
      </main>

      <button className="fab">＋</button>
    </div>
  );
}
