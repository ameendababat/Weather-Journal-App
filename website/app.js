/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear();

const url ="https://api.openweathermap.org/data/2.5/weather?zip=";
const apikey ="&appid=39bd8266c4704967799498f3a494f673&units=imperial";

const server ="http://localhost:5000";

const btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",DataGenerate);

function DataGenerate(){

    const zip = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;


    // using Promise  Geting data from api 
    weatherDataReterve(zip)
    .then((data)=>{
        if(data && data.main){
    const {
        main:{temp},
        weather:[{description}]
    }=data;

    const infor = {
        newDate,
        temp:Math.round(temp),   
        feeling
    }

    dataPost(server +'/Dpost',infor);
    getData();

  }
  else{
    console.error("Invalid data received from API: ",data);
  }

    });
}

async function getData() {

    const result = await fetch(server +"/getALL");

    try{
        const dataa = await result.json();

        document.getElementById("date").innerHTML = "current Date: "+dataa.newDate;
        document.getElementById("temp").innerHTML = "Temperature Wether: "+dataa.temp;
        document.getElementById("content").innerHTML = "content : "+dataa.feeling;

    }
    catch(error){
        console.log(error);
    }
}

const weatherDataReterve = async (zip)=>{

    const result = await fetch(url+zip+apikey);

    try{
        const dataAll = await result.json();
        return dataAll;
    }
    catch(error){
        console.log("error ",error);
    }
}


const dataPost = async (url="",EnteryData = {}) => {
    const result = await fetch(url,{
        method:'post', 
        headers:{
          'Content-type':'application/json'
          },
        body:JSON.stringify(EnteryData),
    });

    try{
        const ready = await result.json();
        console.log("data ",ready);
        return ready;
    }
    catch(error){
        console.log(error);
    }
}


