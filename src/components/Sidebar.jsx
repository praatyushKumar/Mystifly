import React from 'react';

function SideBar(props){

    console.log(props.sideBarData,'wewe')
    return(
        <div className="containerForFilters">
            <div className="sidebar-filter-text">Filter By Airlines</div>
            {
            props.sideBarData.map((item)=>{
             return (<div className="checkbox-container">
                <input type="checkbox"/>
                <div className="checkbox-text">{item.name}</div>
             </div>)       
            })
            }
        </div>
    )
}
export default SideBar;