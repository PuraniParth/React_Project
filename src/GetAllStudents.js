import {Link, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import './index.css';

export default function GetAllStudents(){
    const navigate = useNavigate();
    const [data,setData] = useState([]);
  
    useEffect(()=>{
      fetch('https://630c454e53a833c534269942.mockapi.io/Students')
      .then(res=>res.json())
      .then(res=>setData(res));
    },[]);
  
     const fData = data.map((d)=>{
        return(<>

        <Link to={'../Students/' +d.id}>
        <div class=" extra2 card my-4 mr-5 ml-4" style={{width: "20rem"}}>
          <h5>{d.id}</h5>
          <img src={d.studentImage} class="card-img-top " alt="..."/>
          <div class="card-body">
          <h5 class="card-title">{d.studentname}</h5>
          <p class="card-text">Placement 2022-23</p>
          <a href="#" class="btn mt-2 btn-primary">Details</a>
        </div>
      </div>
      </Link>
      
      </>)
      })
     
      // const Data = data.map((d)=>{
      //   return <h1 onClick={()=>{navigate('/students/'+d.id);}}>{fData}</h1>
      // }
      // );

      return fData;
  }