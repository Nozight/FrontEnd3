import {useEffect, useState} from "react";

 function PracticaHooks()  {
     //REEMPLAZADO por const [frutas,setFruta]= useState()
//   constructor() {
//     super();
//     this.state = {
//       listadoDeFrutas: ["Manzana", "Pera", "Banana"],
//     };
//   }
const [frutas,setFruta] = useState(["Manzana", "Pera", "Banana"])
  const agregarFruta = (e) => {
    e.preventDefault();
    let nuevaFruta = e.target.nuevaFruta.value;
    //REEMPLAZADO con hooks por setFruta()
    // this.setState({
    //   listadoDeFrutas: [...this.state.listadoDeFrutas, nuevaFruta],
    // });
    setFruta([...frutas, nuevaFruta])
    e.target.nuevaFruta.value = "";
  };
useEffect(()=>{
    console.log("se volvio a renderizar la pagina");
})
  
  
    return (
      <div>
        <h1>Frutas</h1>
        <ul>
          {frutas.map((fruta, i) => {
            return <li key={i}>{fruta}</li>;
          })}
        </ul>
        <form onSubmit={agregarFruta}>
          <input name="nuevaFruta" type="text" /> <br />
          <button>Añadir nueva fruta</button>
        </form>
      </div>
    );
  }


export default PracticaHooks;