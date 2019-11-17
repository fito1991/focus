import React, {useState} from 'react';

function App() {

//State
const [error, capturarError] = useState(false);
const [usuarios, guardarUsuarios] = useState({});

/** Obtengo la lista de usuarios */

const obtenerUsuarios = () => {
  
  const url = 'https://jsonplaceholder.typicode.com/users/';

  fetch(url)
    .then(response => {
      if(response.status >= 200 && response.status < 300){
        console.log(response.status);
        return response.json(); 
      }else{

        console.log(response.status);
        // capturarError(true);
      }
    })
    .then(jsonUsuarios => { 
      
      //Guardo el listado de los usuarios
      guardarUsuarios(jsonUsuarios);
      console.log(jsonUsuarios);

    });

}

obtenerUsuarios();


  return (
    <div className="App">

    </div>
  );
}

export default App;
