import './App.css';
import {useEffect, useState} from 'react'

function Hooks(){
    const [a,b,...c] = [2,3,4,5,6,7,8,9];
    const [nombre,apellido] = ["Luis", "navas"]
    const [loading,setLoading] = useState(false);
    const [name,setName]=useState("luis");
    const [data,setData]=useState([]);
    const [user,setUser]=useState({})
    
    const cambiar=()=>{
        setName("Salomon")
        setUser({name:"tomas"})
        setTimeout(() => {
            setLoading(true)
        }, 2000);
    }
   
    const sumar = (a,b,...c)=>{
        if (c.length===0) {
            return a+b;
        }else{
            let total
            c.forEach(e => {
                total +=e
            });
            return total
        }
    }
    useEffect(()=>{//se utiliza cuando renderiza la pagina
        setUser({name:"juan"})
        setData([{data:"data de api"}]) 
          
    },[])
    return (
        <div className="container">
            <ul>
                {loading?<li>{data[0].data}</li>:<li>falso</li>}
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li>{c[0]}</li>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{name}</li>
                <li>{user.name}</li>
                <button onClick={cambiar}>cambiar nombre</button>
            </ul>
        </div>
    )
}
export default Hooks;