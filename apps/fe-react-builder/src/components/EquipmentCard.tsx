import { IoShieldHalfSharp } from "react-icons/io5";
import { GiBeltArmor } from "react-icons/gi";
import { GiVisoredHelm } from "react-icons/gi";
import { GiTwoHandedSword } from "react-icons/gi";
import { GiEmeraldNecklace } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { GiChestArmor } from "react-icons/gi";
import { useState } from "react";


export function IconSelector(type:string) {
    
    switch (type) {
        case "shield":
            return <IoShieldHalfSharp 
            size={"2rem"}/>;
        case "amulet":
            return <GiEmeraldNecklace 
            size={"2rem"}/>;
        case "weapon":
            return <GiTwoHandedSword 
            size={"2rem"}
            />;
        case "helmet":
            return <GiVisoredHelm 
            size={"2rem"}/>;
        case "ring":
            return <LiaRingSolid 
            size={"2rem"}/>;
        case "armor":``
            return <GiChestArmor 
            size={"2rem"}/>
        default:
            return "You ain't got no type !"
    }
}

export type EquipmentCardProps = {
    equipmentType:string
}

export default function EquipmentCard({equipmentType}:EquipmentCardProps) {

    const equipmentName = "The Art Of Broken Pigs And dangerous swords ";
    const equipmentRarity = "green";
    const [tooltip,setTooltip] = useState("hide tooltip")

    const handleClick = ()=> {
        console.log("something happened")
    }

    const handleMouseEnter = ()=> {
        setTooltip("show tooltip")
    }

    const handleMouseLeave = ()=> {
        setTooltip("hide tooltip")
    }

    const cardStyle: React.CSSProperties =  {
        width:"200px",
        display:"flex",
        flexDirection:"row",
        paddingLeft: "2.5%",
        paddingRight:"2.5%",
        border: "2px solid #DBC1A2",
        borderRadius:"10px",
        alignItems:"center",
        justifyContent:"center"
    }

    const cardTextStyle:React.CSSProperties = {
        marginLeft:"10px",
        fontSize:"14px",
        fontWeight:"bold",
        color:equipmentRarity,
        marginTop:"5%",
        marginBottom:"5%"
    }

    const cardIconStyle:React.CSSProperties = {
    } 

    return (
        <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={cardStyle}>
            {/* <p>{tooltip}</p> */}
            <div style={cardIconStyle}>
                {IconSelector(equipmentType)}
            </div>
            <p style={cardTextStyle}>{equipmentName}</p>
        </div>
    )
}