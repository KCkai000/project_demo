import "./App.css";

function App() {
    return (
        <div>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px",
                }}
            >
                <div
                    style={{
                        fontSize: "36px",
                    }}
                    className="lxgw-wenkai-tc-regular"
                >
                    LOGO
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <form
                        className="d-flex"
                        style={{ width: "400px" }}
                        role="search"
                    >
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-outline-danger">登出</button>
                </div>
            </header>

            <div style={{ display: "flex", height: "100vh" }}>
                {/* Sidebar */}
                <aside
                    style={{
                        width: "220px",
                        backgroundColor: "#f0f0f0",
                        padding: "20px",
                    }}
                >
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                            <a href="#">首頁</a>
                        </li>
                        <li>
                            <a href="#">打卡紀錄</a>
                        </li>
                        <li>
                            <a href="#">請假申請</a>
                        </li>
                        <li>
                            <a href="#">簽核清單</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main style={{ flex: 1, padding: "20px" }}>
                    <h2>主內容區</h2>
                    <p>這裡是主畫面內容，之後你可以接上路由、資料等。</p>
                </main>
            </div>
        </div>
    );
}

export default App;
