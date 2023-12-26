import { Nav } from "react-bootstrap"
import { Link, useLocation} from "react-router-dom"

type SidebarProp = {
    isCharSelected : boolean
}

const SidebarNav: React.FC<SidebarProp> = ({isCharSelected})=> {

    const location = useLocation();

    const tabs = [
        {name: "Skill Tree", href:"/builder"},
        {name: "Fortune", href:"/builder/fortune"},
        {name: "Item", href:"/builder/item"},
        {name: "Stat & Attribute", href:"/builder/stat-attr"},
        {name: "Summary", href:"/builder/summary"}
    ]

    const baseStyle :React.CSSProperties = {
        color: "#DBC1A2",
        fontWeight: "700",
        fontSize:"25px",
    }

    const tabStyle: React.CSSProperties = {
        ...baseStyle,
       
    };

    const selectedTabStyle: React.CSSProperties = {
        ...baseStyle,
        borderRadius: "0px 1rem 1rem 0px",
        padding:"5px",
        backgroundImage: "linear-gradient(#2c2724, #2c2724), linear-gradient(to right, transparent, #DBC1A2)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        textAlign:"center",
    }

    return (
        <Nav className="flex-column">
            {tabs.map((tab,index)=> {
                return (
                    <Nav.Item className="mt-2"> 
                        <Nav.Link disabled={!isCharSelected} key={index} as= {Link} to={tab.href} style={location.pathname == tab.href?selectedTabStyle:tabStyle}> {tab.name} </Nav.Link>
                    </Nav.Item>
                    
                )
            })}
        </Nav>
    )
}

export default SidebarNav;