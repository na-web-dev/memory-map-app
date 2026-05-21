import { useState } from "react";
import "./Layout.css";
import Header from "./Header";
import MapArea from "./MapArea";
import List from "./List";
import Calendar from "./Calendar";
import PostForm from "./PostForm";

export default function Layout() {
  const [view, setView] = useState<string>("map");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <div className="layout">
        <aside className="sidebar">
          <button onClick={() => setView("list")}>一覧</button>
          <button onClick={() => setView("calendar")}>カレンダー</button>
        </aside>

        <main className="main-area">
          {view === "map" && <MapArea />}
          {view === "list" && <List />}
          {view === "calendar" && <Calendar />}
        </main>
        <button className="fab" onClick={() => setShowForm(true)}>
          ＋
        </button>
        {showForm && (
          <div id="overlay" onClick={() => setShowForm(false)}>
            <PostForm closeForm={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </>
  );
}
