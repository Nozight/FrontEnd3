import "./App.css";
import {  BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Hoteles from './components/Hoteles/Hoteles'
import Paquetes from "./components/Paquetes/Paquetes";
import Nav from "./components/Nav/Nav";
import React, { Component } from 'react';
import axios from "axios";


class Routers extends Component {
    // const[loading,setLoading] = useState('')
    constructor(props){
        super(props)
        this.state ={
            hoteles:[],
            paquetes:[]
        }
    }
    async request(){// Esto es para avisarle que vamos a usar promesas
        await axios('https://pruebagcd.herokuapp.com/paquetes') //Same fetch pero ya lo parsea automaticamente a json
        .then(res => this.setState({
            paquetes:res.data
        }))
    }
    componentDidMount(){
        this.request()
    }
    render (){
        console.log(this.state.paquetes);
        return(
        <div className="App">
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    
                </Route>
                <Route path="/hoteles" element={ <Hoteles/>}>
                   
                </Route>
                <Route path="/paquetes" element={<Paquetes data={this.state.paquetes}/>}>
                    
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
        )
    }
}

export default Routers;