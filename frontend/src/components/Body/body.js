import React from "react";
import "./body.css";
// import "../Form/form.css"
const Body=()=>{
    return(
        <div className="body-container">
        <div className="forms-container">
            <form className="form0">
                <label>nnnn</label>
            </form>

            <form className="form1">
                <label></label>
            </form>

            <form className="form2">
                <label></label>
            </form>

            <form className="form3">
                <label></label>

            </form><form className="form4">
                <label></label>

                
            </form><form className="form5">
                <label></label>
            </form>


            {/* <div className="text">
                <h1>Statistics</h1>
                <p>List six different intresting statistics regarding your data (for example min,max,median,etc.)</p>
            </div> */}
        </div>
        <div className="form">
        <div className="form-size">
          <h1 className ="head">About the Data </h1>
          <p className="type-text">Write ~150 to 200 word introduction to your chosen data set</p>
        </div>
        {/* <div className="label"/> */}
      </div>
      </div>
    );
}
export default Body;