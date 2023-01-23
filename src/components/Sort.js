import React from "react";
import Filter from "./Filter";
function Sort ({sort,setSort,arrange,setArrange ,setBotClass, bot_class}){
    
   
    return (
        <>
         <Filter setBotClass={setBotClass} bot_class={bot_class}/>
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
        </>
        
    )
}
export default Sort;