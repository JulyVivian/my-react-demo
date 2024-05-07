import { Link, Outlet } from "react-router-dom";

export default function List () {
    return (
        <div className="list-wrap">
            我是标题
            <Link to="/list">列表</Link>
            <Link to="/intro">介绍</Link>
            <Outlet />
        </div>
    )
}