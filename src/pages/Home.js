import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import DetailService from "../service/DetailService";

export default function Home() {
  // define user states
  const [user, setUser] = useState([]);

  // define useEffect
  useEffect(() => {
    DetailService.getDetails().then((response) => {
      setUser(response.data);
    });
  }, []);

  // create the root node object
  let rootNode = {};

  // seperate root node details and assign it to root node reference
  {
    user.map((item, index) => {
      if (item.parentCard == "0") {
        rootNode = item;
        return;
      }
    });
  }

  // sort the user list by using parent card no
  const ascendingByParentCard = [...user].sort(
    (a, b) => a.parentCard - b.parentCard
  );

  // remove the root node details and set other data to return data refernce
  const returnData = ascendingByParentCard.slice(1);


  const list = [];
  returnData.forEach((product) => {
    
    list.push(product)
  })




  // this treeNodeSet const use for set the datas to tree node elements
  const treeNodeSet = returnData.map((item, index) => {
    // returnData.forEach(element => {
    //   element.parentCard == item.parentCard? <li></li> : <li></li>;
    // });   
    
    return (      
      rootNode.id == returnData.parentCard ?
      <TreeNode
        key={item.id}
        label={
          <div className="d-flex justify-content-center">
            <div className="card bg-primary">
              <ul
                className="list-group bg-primary"
                style={{ textAlign: "left" }}
              >
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Id:</span> {item.id}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Name:</span> {item.name}{" "}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {item.description}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Time Duration:</span>
                  {item.timeDuration}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>parentCard:</span>{" "}
                  {item.parentCard}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Attributes:</span>
                  {item.attributes}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Role:</span>
                  {item.role}
                </li>
              </ul>
            </div>
          </div>
        }
      >    

        <TreeNode
        key={item.id++}
        label={
          <div className="d-flex justify-content-center">
            <div className="card bg-primary">
              <ul
                className="list-group bg-primary"
                style={{ textAlign: "left" }}
              >
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Id:</span> {item.id}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Name:</span> {item.name}{" "}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {item.description}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Time Duration:</span>
                  {item.timeDuration}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>parentCard:</span>{" "}
                  {item.parentCard}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Attributes:</span>
                  {item.attributes}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Role:</span>
                  {item.role}
                </li>
              </ul>
            </div>
          </div>
        }
      ></TreeNode>
        
      </TreeNode>: <TreeNode label={
          <div className="d-flex justify-content-center">
            <div className="card bg-primary">
              <ul
                className="list-group bg-primary"
                style={{ textAlign: "left" }}
              >
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Id:</span> {item.id}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Name:</span> {item.name}{" "}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {item.description}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Time Duration:</span>
                  {item.timeDuration}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>parentCard:</span>{" "}
                  {item.parentCard}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Attributes:</span>
                  {item.attributes}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Role:</span>
                  {item.role}
                </li>
              </ul>
            </div>
          </div>
        }></TreeNode>
    );
  });

  return (
    <div className="container mt-3 mb-5">
      {/* root node datas set to tree element */}
      <Tree
        label={
          <div className="d-flex justify-content-center">
            <div className="card bg-primary">
              <ul
                className="list-group bg-primary"
                style={{ textAlign: "left" }}
              >
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Id:</span>
                  {rootNode.id}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Name:</span>
                  {rootNode.name}{" "}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Description:</span>
                  {rootNode.description}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Time Duration:</span>
                  {rootNode.timeDuration}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>parentCard:</span>
                  {rootNode.parentCard}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Attributes:</span>
                  {rootNode.attributes}
                </li>
                <li className="list-group-item">
                  <span style={{ fontWeight: "bold" }}>Role:</span>
                  {rootNode.role}
                </li>
              </ul>
            </div>
          </div>
        }
      >
        {/* created treeNodeSer Const Set to here */}
        {treeNodeSet}
      </Tree>
    </div>
  );
}
