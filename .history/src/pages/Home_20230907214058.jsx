import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <section style={{ backgroundColor: "#eee" }}>
                <div className="text-center container py-5">
                    <h4 className="mt-4 mb-5">
                        <strong>DANH SÁCH SẢN PHẨM</strong>
                    </h4>
                </div>
            </section>
            <Footer />
        </div>
    )
}
