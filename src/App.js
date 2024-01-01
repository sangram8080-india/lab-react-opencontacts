import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

let contact = [
  {
    name: "Idris Elba",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    popularity: 11.622713,
    id: "11731993-0604-4bee-80d5-67ad845d0a38",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Johnny Depp",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    popularity: 15.656534,
    id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Monica Bellucci",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 16.096436,
    id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Gal Gadot",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    popularity: 10.049256,
    id: "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    wonOscar: false,
    wonEmmy: false,
  },
  {
    name: "Ian McKellen",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    popularity: 10.070132,
    id: "0067ae32-97b6-4431-898e-eb1c10150abb",
    wonOscar: false,
    wonEmmy: false,
  },
];

function App() {

  const[rcontact, setRcontact] = useState(contact);


  function handleAdd(){

  const nc = contacts[Math.floor(Math.random()*contacts.length)]

  const newContact =[    
    ...rcontact,
    nc,  
  ]
  let uniq = [...new Set(newContact)];
  setRcontact(uniq)    
  }

  function handleDelete(ContactId){
    setRcontact(rcontact.filter(a=>a.id !== ContactId))
  }

  function handleSortByName(){

     const SortedContacts = [...rcontact]
     SortedContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
     setRcontact(SortedContacts)
  }
  function handleSortByPop(){
     const SortedContacts = [...rcontact]
     SortedContacts.sort((a,b) => a.popularity - b.popularity)
     setRcontact(SortedContacts)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div className="cont">
      <div className="butn">
      <button onClick={handleAdd} className="btn">Add Random Contact</button>
      <button onClick={handleSortByName} className="btn">Sort by Name</button>
      <button onClick={handleSortByPop} className="btn">Sort by Popularity</button>
      </div>

      <div className="App">
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </thead>

        <tbody>
             {rcontact.map((val)=>(

              <tr key={val.id}>
                <td><img style={{width:'60px',height:'90px'}} src={val.pictureUrl} alt="" /></td>
                <td>{val.name}</td>
                <td>{val.popularity}</td>
                {val.wonOscar ?<td>🏆</td> : <td> </td>}
                {val.wonEmmy ? <td>🌟</td> : <td> </td>}
                <td>
                  <button onClick={()=>handleDelete(val.id)} className="btn">Delete</button>
                </td>
              </tr>

             ))}
        </tbody>
      </table>
      </div>
    </div>
  </div>
  );
}

export default App;
