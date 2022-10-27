import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import DetailService from "../service/DetailService";

export default function Home() {
  const [user, setUser] = useState([]);
  const [rootDetail, setRootDetail] = useState([])

  // const fetchData = () => {
  //     return axios.get("https://randomuser.me/api")
  //           .then((response) => setUser(response.data.results[0]));
  //   }

  useEffect(() => {
    DetailService.getDetails().then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);


  const rootNode = {};

  {user.map((item, index) =>{
    console.log(item.name);
    if(item.parentCard == "0"){
      setRootDetail(item)
    } else {
     
    }
   })};

  //  console.log(rootNode[0])

  const Card = (props) => {
    return (
      <ul>
        {props.data.map((item, index) => (
          <Fragment key={item.name}>
            <li>
              <div className="card ">
                <div className="card-body">
                  <h4>{user.country}</h4>
                  <p>{user.gender}</p>
                  <p>ajhdkjdhaal</p>
                </div>
              </div>
              {item.children?.length && <Card data={item.children} />}
            </li>
          </Fragment>
        ))}
      </ul>
    );
  };

  return (
    // <div className="org-tree">
    //   <Card data={data} />
    // </div>
    
    

    <div className="container mt-3">

    
      <Tree
        label={ 
          <div className="d-flex justify-content-center">
            <div className="card bg-primary">
              <ul className="list-group bg-primary" style={{ textAlign: "left" }}>
                <li className="list-group-item">Name : {rootDetail.name} </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        }
      >
        <TreeNode label={<div>Child 1</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
        <TreeNode label={<div>Child 2</div>}>
          <TreeNode label={<div>Grand Child</div>}>
            <TreeNode label={<div>Great Grand Child 1</div>} />
            <TreeNode label={<div>Great Grand Child 2</div>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div>Child 3</div>}>
          <TreeNode label={<div>Grand Child 1</div>} />
          <TreeNode label={<div>Grand Child 2</div>} />
        </TreeNode>
      </Tree>
    </div>
  );
  
}
