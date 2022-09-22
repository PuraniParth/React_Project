import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"
import './index.css';

export default function Detailpage(){

    const navigate=useNavigate();
    const param=useParams();
    const [data,setData]=useState({});
  
    useEffect(()=>{
      fetch('https://630c454e53a833c534269942.mockapi.io/Students/'+param.id,{method:"GET"})
      .then((res)=>{return res.json()})
      .then((res)=>{setData(res)})
    },[]);

    return(
    <>
       <div class="container my-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
            <div class="card p-2 text-center">
                <div class="row">
                    <div class="col-md-7 border-right no-gutters">
                        <div class="py-3 ml-10"><img src={data.studentImage} width="150" class="rounded-circle"/>
                            <h4 class="text-secondary mt-4"  style={{fontSize: "25px" }}>{data.studentname}</h4>
                            <div class="allergy"><span>ON ROLL</span></div>
                            <div class="stats">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex flex-column m-5"> <span class="text-left head">Department</span> <span class="text-left bottom">{data.studentdepartment}</span> </div>
                                            </td>
                                            <td>
                                                <div class="d-flex flex-column m-5"> <span class="text-left head">Age</span> <span class="text-left bottom">22Y</span> </div>
                                            </td>
                                        </tr>
                                        <tr>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={()=>{navigate('../Students/EditStudent/' + param.id); }} class="btn m-2 btn-dark">EDIT</button>
                            <button onClick={()=>{fetch('https://630c454e53a833c534269942.mockapi.io/Students/'+ param.id,{method:"DELETE"})
                                                  .then((res)=>{
                                                  navigate('/Students')
                                                 })
                                                   }} class="btn m-2 btn-dark">DELETE</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="py-3">
                            <div> <span class="d-block head">ID</span> <span class="bottom">{data.id}</span> </div>
                            <div class="mt-5"> <span class="d-block head">Student Phone#</span> <span class="bottom">{data.studenmobile}</span> </div>
                            <div class="mt-5 "> <span class="d-block head">Parents Phone#</span> <span class="bottom">{data.studentparentNO}</span> </div>
                            <div class="mt-5 "> <span class="d-block head">Email</span> <span class="bottom">{data.studentEmail}</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>         
      </>)
  }