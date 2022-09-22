import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addstudent(){
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    return(
        <>
        
        <div className="form-container">
            <div>
            <h1 class="mt-5 mb-3 head" style={{fontSize: "25px",color:"white" }}>Add Student Details</h1>
            </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,studenmobile:e.target.value})}}></input>
                <label for="floatingInput">mobile number..</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,studentname:e.target.value})}}></input>
                <label for="floatingPassword">Enter Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,studentImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="ID" onChange={(e)=>{
                setData({...data,studentEmail:e.target.value})}}></input>
                <label for="floatingPassword">Enter EMAIL..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="ID" onChange={(e)=>{
                setData({...data,studentparentNO:e.target.value})}}></input>
                <label for="floatingPassword">Enter parent mobile..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,studentdepartment:e.target.value})}}></input>
                <label for="floatingPassword">Enter Department..</label>
        </div>


            <input type="button" className="btn btn-outline-primary my-4" value="AddStudent" onClick={()=>{
                fetch('https://630c454e53a833c534269942.mockapi.io/Students/'
                ,{method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
                })
                .then((res)=>{
                    navigate('/Students');
                })
            }}></input>
         </div>
        </>
    )
}