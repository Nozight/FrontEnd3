
import { useState } from 'react';
import axios from 'axios';
import List from './List'

function Dentists() {
  const [dentist, setDentist] = useState({})
  const [list, setList] = useState([{}]);
  const [regSuccess,setSuccess] = useState(false)
//REGISTER 
  const registerDentist = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/dentist', {
      name: e.target[0].value,
      last_name: e.target[1].value,
      enrollment: e.target[2].value,
    })
      .then(function (response) {
        setDentist(response.data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //SEARCH ONE
  const searchByName = () =>{

  }
  //SEARCH ALL
  const searchAllDentists = () => {
    axios.get('http://localhost:8080/api/dentist/all')
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="true">Register</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="search-tab" data-bs-toggle="tab" data-bs-target="#search" type="button" role="tab" aria-controls="search" aria-selected="false" >Search</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false" onClick={searchAllDentists}>Dentist List</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">

        <div className="tab-pane fade show active" id="register" role="tabpanel" aria-labelledby="register-tab">
          {/* FROM */}
          <form name="registerDentist" action="" onSubmit={registerDentist} method="post">
            <div className='p-4'>
              <div className="form-floating mb-3">
                <input required  type="name" className="form-control" id="floatingName" placeholder="Tomas"></input>
                <label htmlFor="floatingName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input required type="last-name" className="form-control" id="floatingLastName" placeholder="Romero"></input>
                <label htmlFor="floatingLastName">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input required type="number" className="form-control" id="floatingInput" placeholder="3546859"></input>
                <label htmlFor="floatingInput">Enrollment</label>
              </div> 
              <input type="submit" value="Register"></input>
            </div>
           
          </form>
          {regSuccess? <span className="badge bg-success">Registration Successful</span>: null}
        </div>
        {/* SEARCH ONE */}
        <div className="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">...</div>
        {/* SEARCH ALL */}
        <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab"><List list={list} /></div>
      </div>
    </div>

  )
}
export default Dentists;