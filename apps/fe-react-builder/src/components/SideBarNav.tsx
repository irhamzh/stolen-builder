import React, { useState,useRef } from "react"
import { Container, Nav } from "react-bootstrap"
import { Link, useLocation, useSearchParams } from "react-router-dom"


const SidebarNav = ()=> {

    const [searchParams,setSearchParams] = useSearchParams({currentPath:"/builder"});
    const location = useLocation()
    const tabs = [
        {name: "Skill Tree", href:"/builder"},
        {name: "Fortune", href:"/builder/fortune"},
        {name: "Item", href:"/builder/item"},
        {name: "Stat & Attribute", href:"/builder/stat-attr"},
        {name: "Summary", href:"/builder/summary"}
    ]

    const selectedTab= useRef(searchParams.get("currentPath")); // we set the default using the params then :/
    const baseStyle :React.CSSProperties = {
        color: "#766256",
        fontWeight: "700",
        fontSize:"35px"
    }

    const tabStyle: React.CSSProperties = {
        ...baseStyle,
        backgroundColor: "transparent   ",
    };

    const selectedTabStyle: React.CSSProperties = {
        ...baseStyle,
        border: "10px solid" 
    }

    return (
        <Nav className="flex-column my-[130px]">
            <p>{location.pathname}</p>
            {tabs.map((tab,index)=> {
                return (
                    <Nav.Item className="mt-4"> 
                        <Nav.Link key={index} as= {Link} to={tab.href} onClick={(e:any)=> {setSearchParams({currentPath:tab.href}); console.log(location.pathname)}} style={selectedTab.current == tab.name?selectedTabStyle:tabStyle}> {tab.name} </Nav.Link>
                    </Nav.Item>
                    
                )
            })}
        </Nav>
    )
}

export default SidebarNav;