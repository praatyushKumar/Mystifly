import React from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import FilteredArea from './components/FilteredArea';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

   const [data, setData]= React.useState([]);
   const [airLineData, setAirLineData]= React.useState([]);
   const [filteredArray, setFilteredArray]= React.useState([]);
   const getData=()=>{
    fetch('airlines.json',{ headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}).then(function(response){
        return response.json();
      }).then(function(myJson) {
        setData(myJson);
      });
  }
  const getFlightAirlineData=()=>{
    fetch('result.json',{ headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}).then(function(response){
        return response.json();
      }).then(function(myJson) {
        console.log('airlnewew',myJson)
        setAirLineData(myJson);
      });
  }  
  React.useEffect(()=>{
    getData();
    getFlightAirlineData();
  },[])
  return (
    <React.Fragment>
    <Header/>
    <div className="container-area">
     <SideBar sideBarData={data}/>
     <FilteredArea/>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
