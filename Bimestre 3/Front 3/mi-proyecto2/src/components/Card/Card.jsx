const Card = ({ data,myKey }) => {
    return (
        <div key={myKey + "p"} className="card m-2 p-1 d-flex" style={{width: "18rem"}}>
            <img src={data.src} className="card-img-top" alt={data.nombre}></img>
            <div className="card-body">
                <h5 className="card-title">{data.nombre}</h5>
                <p className="card-text">Desde: {data.ingreso} Hasta: {data.egreso}</p>
                <p className="card-text">Promo: {data.estadia}</p>
                <p className="card-text">Costo: {data.costo}</p>
                <p className="card-text">Lugar de salida: {data.ubicacion}</p>
                <ul type="none" className="d-flex row"><h4>Servicios</h4>
                {data.servicio.map((servicio,i)=> <li key={i.toString() + "s"}>{servicio}</li> )}
                </ul>
                <a href="#" className="btn btn-primary">Hacer Reserva</a>
            </div>
        </div>

    )
}
export default Card;
