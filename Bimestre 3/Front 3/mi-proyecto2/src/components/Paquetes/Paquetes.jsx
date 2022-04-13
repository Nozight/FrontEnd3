import Card from "../Card/Card";
const Paquetes = ({ data }) => {
    return (<div className="row d-flex justify-content-center">
        <h2>Paquetes</h2>
        {data.map((hotel, i) => {// Siempre que use map necesito Keys para que react sepa diferenciar cada componente
            return <Card key={i.toString() + "card"} data={hotel} myKey={i.toString()} />
        })}
    </div>
    )

}


export default Paquetes;