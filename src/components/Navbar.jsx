import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const NAVCONFIG = [

        {
            name: "home",
            Link: "/home",
            id: 1,
        },
        {
            name: "aboutus",
            Link: "/aboutus",
            id: 2
        },
        {
            name: "produts",
            Link: "/produts",
            id: 3
        },
        {
            name: "users",
            Link: "/users",
            id: 4,
        },
        {
            name: "produt",
            Link: "/product",
            id: 5,
        },
        {
            name: "login",
            Link: "/login",
            id: 6,
        },
        {
            name: "dashboard",
            Link: "/dashboard",
            id: 7,
        }
    ]
    return (
        <div style={{ display: 'flex', gap: "20px", background: "orange", padding: "20px" }}>
            {/* <div className='flex gap-2 bg-orange-350 p-8'></div> */}
            {
                NAVCONFIG.map(i =>
                    <div key={i.id}>
                        <Link to={i.Link}>{i.name}</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar