import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const colorBackground = {
        //Hex to RGBA package para solo darle una opoacidad al color primario para que sea el color de fondo
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={colorBackground}>
                <input 
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento) => {
                        //evento.target.value hace referencia al value del input color que se está cambiando
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            //Manda eliminarColab a cada colaborador
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo