import React from "react";
function Sort ({sort,setSort,arrange,setArrange}){
   
    return (
        <div className="sortSection">
         <label className="sortSection1">Sort by:
         <select value ={sort} onChange={(event)=>{setSort(event.target.value)}}>
            <option value ="health">health</option>
            <option value="damage">damage</option>
            <option value="armor">armor</option>
         </select>
         </label>
         <label className="sortSection2">Sort By:
            <select disabled={sort==='none'?true:false} value={arrange} onChange={(event)=>{setArrange(event.target.value)}}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
            </select>
         </label>
        </div>
    )
}
export default Sort;