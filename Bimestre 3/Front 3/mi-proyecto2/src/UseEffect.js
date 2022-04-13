import { useState, useEffect } from 'react';
import './App.css';
// import data from '../data/data.json'

function UseEffect() {
    var url = "https://pruebagcd.herokuapp.com/";
    const [data, setData] = useState([])
    const [opcion, setOpcion] = useState('hoteles');
    //Cuando se modifique la data, useEffect se ejecuta
    //los efectos secundarios
    //hay un metodo con 2 parametros
    //useEffect(callback como 1er argumento, el 2do el array)
    //useEffecr(callback, [variable])

    useEffect(() => {
        const api = async () => {
            const response = await fetch(url + opcion)
            const json = await response.json()
            setData(json)
        }
        api();
    }, [opcion])//useEffect se ejecuta al modificarse la variable que le pasamos 

    const cambiarOpcion = () => {
        opcion === 'hoteles' ? setOpcion('paquetes') : opcion === 'paquetes' ? setOpcion('ofertas') : setOpcion('hoteles')
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <button className='btn btn-primary my-5' onClick={cambiarOpcion}>Cambiar Opcion</button>
                </div>
                <div className='col-2 my-5'>
                    <ul type="none">
                        {data.map((o, i) => <li key={i + o.nombre}>{o.nombre}</li>)}
                    </ul>
                </div>
            </div>


        </div>
    )
}
export default UseEffect;