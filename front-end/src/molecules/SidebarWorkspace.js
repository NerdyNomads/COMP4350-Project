import React, { useEffect, useState } from "react";

import { AddWorkspaceIcon } from "../atoms/icons";
import SidebarWorkspaceItem from "../atoms/SidebarWorkspaceItem";

import "./SidebarWorkspace.css";

const componentName = "SidebarWorkspace";
function SidebarWorkspace( ) {  

  const [ showAddWorkspace, setShowAddWorkspace ] = useState(false);
  const [ workspaceList, setWorkspaceList ] = useState([]);

  useEffect(() => {
    
    // Do GET request here
    
    const fakeWorkspace = [
      {name: "My Workspace", id: 1},
      {name: "eThis is a very long workspace name", id: 2},
      {name: "workspace1", id: 3},
    ];

    setWorkspaceList(fakeWorkspace);

  }, []);
    

  const handleWorkspaceSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const newWorkspaceList = [...workspaceList, {id: Math.random(), name:e.target.value}];
      setWorkspaceList(newWorkspaceList);
      e.target.value = "";

      // Do update request here

    }
    
  };

  const addWorkspaceInput = showAddWorkspace ?
    <div className={`${componentName}-add`}>
      <input 
        type="text" 
        autoFocus 
        placeholder="Enter Workspace Name"
        className={`${componentName}-add-input`}
        onKeyPress={(e) => handleWorkspaceSubmit(e)}/>
    </div> 
    : <></>;

  const handleAddWorkspace = () => {
    setShowAddWorkspace(!showAddWorkspace);
  };

  const renderList = () => (
    workspaceList && workspaceList.map( (workspaces) => 
      <SidebarWorkspaceItem key={workspaces.id} name={workspaces.name}/>)
  );

  const header = <div className={`${componentName}-header`}>
    <span>My Workspaces</span>
    <AddWorkspaceIcon className={`${componentName}-add-icon`} onClick={handleAddWorkspace}/>
  </div>;

  return (
    <div className={`${componentName}`}>
      
      {header}
      {addWorkspaceInput}
    
      {renderList()}


    </div>
      

   
  );
}

export default SidebarWorkspace;