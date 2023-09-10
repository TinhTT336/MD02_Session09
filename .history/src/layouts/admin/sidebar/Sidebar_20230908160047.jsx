import React from 'react'
import "./sidebar.css";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    return (
        <>
            <div className='h-100 bg-black sidebar-admin'>
                <div>
                    <NavLink className="router-item">
                        <div></div>
                        <div>Tổng quan</div>
                    </NavLink>
                    <NavLink className="router-item">
                        <div></div>
                        <div>Quản lý sản phẩm</div>
                    </NavLink>
                    <NavLink className="router-item">
                        <div></div>
                        <div>Quản lý người dùng</div>
                    </NavLink>
                </div>
            </div>

        </>
    )
}
