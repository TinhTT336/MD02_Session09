import React from 'react'
import "./sidebar.css";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    return (
        <>
            <div className='h-100 bg-black sidebar-admin'>
                <div>
                    <NavLink to={"/admin"} className="router-item">
                        <div></div>
                        <div className='router-item-title'>Tổng quan</div>
                    </NavLink>
                    <NavLink to={"/admin/manager-product"} className="router-item">
                        <div></div>
                        <div className='router-item-title'>Quản lý sản phẩm</div>
                    </NavLink>
                    <NavLink to={"/admin/manager-user"} className="router-item">
                        <div></div>
                        <div className='router-item-title'>Quản lý tài khoản</div>
                    </NavLink>
                </div>
            </div>

        </>
    )
}