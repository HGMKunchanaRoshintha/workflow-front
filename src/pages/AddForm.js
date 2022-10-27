import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function AddForm() {

    let navigate = useNavigate()

    const [detail, setDetail] = useState({
        name: "",
        description: "",
        duration:"",
        parentCard:"",
        phoneNo:"",
        nic:"",
        role:""
    });

    const {name,description,duration,parentCard,phoneNo,nic,role} = detail

    const onInputChange = (e)=>{
        setDetail({...detail,[e.target.name]: e.target.value});
    }

    const onSubmit = async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/details",detail);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-2 mb-3">Add Detail</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-row">
              <div className="form-group col-md mt-1">
                <label htmlFor="nameTxt">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nametxt"
                  placeholder="Name"
                  name='name'
                  value={name}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group col-md mt-1">
                <label htmlFor="descriptionTxt">Description</label>
                <textarea
                  type="text"
                  className="form-control mt-1"
                  id="descriptionTxt"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e)=>onInputChange(e)}
                ></textarea>
              </div>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="timeDurationTxt">Time Duration</label>
              <input
                type="text"
                className="form-control mt-1"
                id="timeDurationTxt"
                placeholder="By Month/Day/year"
                name="duration"
                value={duration}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentCardTxt">Parent Card</label>
              <input
                type="text"
                className="form-control mt-1"
                id="parentCardTxt"
                placeholder="Parent Card"
                name="parentCard"
                value={parentCard}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="phoneNotxt">Phone No </label>
              <input
                type="text"
                className="form-control mt-1"
                id="phoneNotxt"
                placeholder="Phone No"
                name="phoneNo"
                value={phoneNo}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="nictxt">NIC</label>
              <input
                type="text"
                className="form-control mt-1"
                id="nictxt"
                placeholder="Nic"
                name="nic"
                value={nic}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="roletxt">Role</label>
              <input
                type="text"
                className="form-control mt-1"
                id="roletxt"
                placeholder="Role"
                name="role"
                value={role}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="form-row text-center mt-2">
              <button type="submit" className="btn btn-outline-primary col-md-12">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
