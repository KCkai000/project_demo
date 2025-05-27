import "./App.css";
import { Carousel } from "antd";

function App() {
    const contentStyle = {
        // height: "160px",
        color: "#fff",
        // lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    return (
        <div>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px",
                    backgroundColor: "#DDDCEE",
                    opacity: 0.7,
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

            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    maxWidth: "100%",
                    textAlign: "",
                }}
            >
                {/* Sidebar */}
                <aside
                    style={{
                        width: "30%",
                        maxWidth: "300px",
                        minWidth: "150px",
                        backgroundColor: "#D1DDD8",
                        padding: "20px",
                        overflow: "auto",
                        opacity: 0.75,
                    }}
                >
                    {" "}
                    <div
                        class="list-group"
                        style={{ margin: "auto", minWidth: "0" }}
                    >
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            使用者設定
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            權限設定
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            功能設定
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            表單設定
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            通知
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            請假
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            訂購
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            報修
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action list-group-item-light w-100 fs-6 py-2"
                        >
                            休假相關
                        </a>
                    </div>
                    {/* <div class="sidebar">
                        <a href="#home">
                            <i class="fa fa-fw fa-home"></i> Home
                        </a>
                        <a href="#services">
                            <i class="fa fa-fw fa-wrench"></i> Services
                        </a>
                        <a href="#clients">
                            <i class="fa fa-fw fa-user"></i> Clients
                        </a>
                        <a href="#contact">
                            <i class="fa fa-fw fa-envelope"></i> Contact
                        </a>
                    </div> */}
                </aside>

                {/* Main Content */}
                <main style={{ flex: 1, padding: "20px", minWidth: "0" }}>
                    <h2>主內容區</h2>
                    <p>這裡是主畫面內容，之後你可以接上路由、資料等。</p>
                    <Carousel
                        autoplay
                        style={{
                            maxWidth: "90%",
                            height: "300px",
                            margin: "auto",
                        }}
                    >
                        <div className="ramdom-card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9D9BasZQYNNJ5B_lAyo126G8527ImKn4_g&s"
                                alt="隨機產圖片"
                            />
                        </div>
                        <div className="ramdom-card">
                            <img
                                src="https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg"
                                alt="隨機產圖片"
                            />
                        </div>
                        <div className="ramdom-card">
                            <img
                                src="https://picsum.photos/1000/160"
                                alt="隨機產圖片"
                            />
                        </div>
                        <div className="ramdom-card">
                            <img
                                src="https://picsum.photos/1000/800"
                                alt="隨機產圖片"
                            />
                        </div>
                    </Carousel>
                </main>
            </div>
        </div>
    );
}

export default App;
