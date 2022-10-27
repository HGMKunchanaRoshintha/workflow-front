import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailService from "../service/DetailService";

export default function AddForm() {
  let navigate = useNavigate();

  // define the detail useState here
  const [detail, setDetail] = useState({
    name: "",
    description: "",
    timeDuration: "",
    parentCard: "",
    phoneNo: "",
    role: "",
  });

  const { name, description, timeDuration, parentCard, phoneNo, role } = detail;

  // create onInout event here
  const onInputChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  // this is the detail submit function
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/details", detail);
    navigate("/");
  };

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-2 mb-3">Add Detail</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-row">
              <div className="form-group col-md mt-1">
                <label htmlFor="nameTxt">Name</label>
                <input
                  style={{ textTransform: "capitalize" }}
                  type="text"
                  className="form-control"
                  id="nametxt"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="form-group col-md mt-1">
                <label htmlFor="descriptionTxt">Description</label>
                <textarea
                  style={{ textTransform: "capitalize" }}
                  type="text"
                  className="form-control mt-1"
                  id="descriptionTxt"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
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
                name="timeDuration"
                value={timeDuration}
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="phoneNotxt">Phone No </label>
              <input
                type="number"
                className="form-control mt-1"
                id="phoneNotxt"
                placeholder="Phone No"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="roletxt">Role</label>
              <input
                style={{ textTransform: "capitalize" }}
                type="text"
                className="form-control mt-1"
                id="roleTxt"
                placeholder="Role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-row text-center mt-2">
              <button
                type="submit"
                className="btn btn-outline-primary col-md-12"
              >
                Add Detail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
