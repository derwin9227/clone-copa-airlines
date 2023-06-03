import { copaWhite } from "../../img";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", backgroundColor:"blue", padding:"2rem 1rem", color:"#fff", fontWeight:"bold"}}>
        <nav>
            <ul style={{display:"flex",alignItems:"center", listStyle:"none"}}>
                <div style={{margin:"0 1rem"}}>
                    <img src={copaWhite} alt="copa logo white" />
                </div>
                <li style={{margin:"0 1rem"}}>Reservar</li>
                <li style={{margin:"0 1rem"}}>Mis Viajes</li>
                <li style={{margin:"0 1rem"}}>Check-In</li>
                <li style={{margin:"0 1rem"}}>ConnectMiles</li>
            </ul>
        </nav>
        <div style={{display:"flex",alignItems:"center"}}>
            <span style={{margin:"0 1rem"}}>Informacion</span>
            <span style={{margin:"0 1rem"}}>Español</span>
            <span style={{margin:"0 1rem", borderLeft:"1px solid #ddd"}}>Iniciar Sesion</span>
        </div>
    </div>
  )
}

export default Navbar