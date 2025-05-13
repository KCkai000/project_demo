import "./App.css";

function App() {
    return (
        <div className="layout">
            <header className="head">
                <div>logo</div>
                <ul className="head_menu">
                    <li className="head_list">1111</li>
                    <li className="head_list">1111</li>
                    <li className="head_list">1111</li>
                    <li className="head_list">1111</li>
                </ul>
            </header>

            <div className="main-section">
                <aside className="nav">
                    <div>
                        <div className="nav_menu_set">帳號設定</div>
                        <div className="nav_menu_set">權限設定</div>
                        <div className="nav_menu_set">表單設定</div>
                        <div className="nav_menu_set">通知</div>
                        <div className="nav_menu_set">管理中心</div>
                    </div>
                </aside>

                <div className="body-area">
                    <div className="body-content">
                        {Array.from({ length: 60 }, (_, i) => (
                            <p key={i}>內容第 {i + 1} 行</p>
                        ))}
                    </div>

                    <footer className="foot">FOOT</footer>
                </div>
            </div>
        </div>
    );
}

export default App;
