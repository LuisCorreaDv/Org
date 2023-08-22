// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //const [nombre,actualizarNombre]= useState()
    // const [mostrar,actualizarMostrar] = useState()
    // const manejarClick = () => {
    //     console.log("Click en imagen")
    // }

    return <section className="orgSection">
        <h3 className="org__titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add img" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg