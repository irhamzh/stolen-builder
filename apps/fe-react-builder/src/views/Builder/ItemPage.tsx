import { Col, Container, Row } from "react-bootstrap";
import EquipmentCard from "../../components/EquipmentCard";


const ItemPage = ()=> {

    const equipmentList = [
        {type:"weapon"},
        {type:"shield"},
        {type:"armor"},
        {type:"helmet"},
        {type:"amulet"},
        {type:"ring"}
    ]

    const equipSignStyle : React.CSSProperties = {
        backgroundColor:"#766256",
        textAlign:"center",
        width:"fit-content",
        padding: "4px 13px 4px 13px",
        fontSize:"25px",
        fontWeight:"400px",
        border:"1px solid #DBC1A2",
        borderRadius:"5px",
        position:"absolute",
        top:"12vh", 
        left:"53%" , 
    }


    const equippedStyle:React.CSSProperties = {
        display:"flex",
        marginBottom:"1rem",
        padding:"20px 5px 20px 5px",
        borderRadius:"10px",
        border:"3px solid #DBC1A2"
    };

    const invetoryStyle:React.CSSProperties = {
        backgroundColor:"green"
    }

    return (
        <Container>
            <Row style={equippedStyle}>
                <Col style={{borderRadius:"10px"}}>
                    <p style={equipSignStyle}>EQUIPPED</p>
                    <Row>
                        {equipmentList.map((equipment,index)=> {
                            return (
                                <Col lg={2} style={{padding:"0",marginTop:"1rem"}}>
                                    <EquipmentCard
                                    equipmentType= {equipment.type}
                                    />                                                                                
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col style={invetoryStyle}>
                    <h4>This is Inventory</h4>
                </Col>
            </Row>
        </Container>
    )
};

export default ItemPage;
