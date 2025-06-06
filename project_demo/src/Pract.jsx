import "./App.css";
import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:8081/rest/room"; //連接後端API

function Pract() {
    const [rooms, setRooms] = useState([]);
    const [form, setForm] = useState({
        roomID: "",
        roomId: "",
        roomSize: "",
    });

    useEffect(() => {
        console.log("查詢所有房間");
        fetchRooms();
    }, []);

    //查詢所有房間
    const fetchRooms = async () => {
        try {
            //credentials:'include' ：允許將憑證資料上傳，例如： session id
            const res = await fetch(API_BASE, { credentials: "include" });
            const data = await res.json();
            console.log("data", data);
            setRooms(data.data);
        } catch (err) {
            console.log("取得房間資料失敗：", err.message);
            alert("取得房間資料失敗：" + err.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        console.log(name, value);
    };

    const handleSubmit = (e) => {};

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>房間管理系統</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
                <fieldset>
                    <legend>新增房間</legend>
                    <div>
                        <label>房號：</label>
                        <input
                            type="number"
                            name="roomId"
                            value={form.roomId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>房名：</label>
                        <input
                            type="text"
                            name="roomName"
                            value={form.roomName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>人數：</label>
                        <input
                            type="number"
                            name="roomSize"
                            value={form.roomSize}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">新增房間</button>
                </fieldset>
            </form>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>房號</th>
                        <th>名稱</th>
                        <th>人數</th>
                        <th>編輯</th>
                        <th>刪除</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => {
                        return (
                            <tr key={room.roomId}>
                                <td>{room.roomId}</td>
                                <td>{room.roomName}</td>
                                <td>{room.roomSize}</td>
                                <td>
                                    <button>編輯</button>
                                </td>
                                <td>
                                    <button>刪除</button>
                                </td>
                            </tr>
                        );
                    })}
                    {rooms.length === 0 && (
                        <tr>
                            <td colSpan="5">無資料</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Pract;
