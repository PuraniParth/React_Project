import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './index.css';

export default function Edit(){
    const navigate=useNavigate();
    const [data,setData]=useState({});
    const param=useParams();
    useEffect(()=>{
        fetch("https://630c454e53a833c534269942.mockapi.io/Students/"+ param.id,{method:"GET"})
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res)})
    },[])
    return(
        <>
                <div class="container bootstrap snippets bootdey">
                    <h1 class=" mt-5 mb-4" style={{fontSize: "30px",color:"white",paddingLeft:"80px"}}>Edit Profile</h1>
	            <div class="row">
                <div class="col-md-3">
                <div class="text-center img-thumbnail">
                    <img src={data.studentImage} class="avatar img-circle img-thumbnail"/>
                </div>
                </div>
      
                <div class="col-md-9 personal-info">
                <div class="alert alert-info alert-dismissable">
                    <a class="panel-close close" data-dismiss="alert"></a> 
                    <i class="fa fa-coffee"></i>
                     This is an <strong>.alert</strong>. Edited items will be <strong>added </strong>and non edited will remain same
                </div>
                    <h3  className="m-2" style={{fontSize: "25px"}}>Personal Info</h3>
        
                <form class="form-horizontal d-grid gap-3" role="form" style={{color:"white"}}>
                <div class="form-group">
                    <label class="col-lg-3 control-label">First name:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="Name" onChange={(e)=>{setData({...data,studentname:e.target.value})}}/>
                </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">image:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="ID" onChange={(e)=>{setData({...data,studentImage:e.target.value})}}/>
                </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">Department:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="ID" onChange={(e)=>{setData({...data,studentdepartment:e.target.value})}}/>
                </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">mobile No:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="ID" onChange={(e)=>{setData({...data,studenmobile:e.target.value})}}/>
                </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">Parents mobile No:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="ID" onChange={(e)=>{setData({...data,studentparentNO:e.target.value})}}/>
                </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">E mail:</label>
                <div class="col-lg-8 form-floating">
                    <input class="form-control" type="text" placeholder="date" onChange={(e)=>{setData({...data,studentEmail:e.target.value})}}/>
                <div className="container d-grid gap-2">
                    <input type="button" className="btn btn-outline-primary my-5" value="Edit" onClick={()=>{
                    fetch('https://630c454e53a833c534269942.mockapi.io/Students/'+param.id
                    ,{method:"PUT",
                    body:JSON.stringify(data),
                    headers:{"Content-Type" : "application/json"}
                    })
                    .then((res)=>{
                    navigate('/Students');
                    })
                     }}></input>
                </div>     
                </div>
                </div>
                </form>
                </div>
                </div>
               
</div>
</>
    )
}