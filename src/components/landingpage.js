import React from "react";
import "./landing.css";
import MapContainer from './googlemap';
import RealtimeDataComponent from "./firebase.js";
import flower from './flower.png';
import avatar from './avatar.png';

function Landingpage() {
  return (
    <div className="land-div row">
      <div className="col-lg-8 col-1">
        <div className="row sub-col-1">
          <div className="col-lg-6">
            <img src={flower} alt="img" />
          </div>
          <div className="col-lg-6 sub-col-2">
            <p className="p-1">Heart Rate - normal</p>
            <h2 id="myBPM"><RealtimeDataComponent /></h2>
            <p>19 May 2023</p>
            <p>Not feeling wholesome??? Find nearby doctors</p>
          </div>
        </div>
        <div className="col-lg-8 sub-row-1 map">
        <div className="google_map">
      <MapContainer />
    </div>

        </div>

        
      </div>
     
      <div className="col-lg-4 col-3">
        <div className="color">
          <div className="group">
            <img src={avatar} alt="pic" />
            <h3>LIKITHA</h3>
          </div>
          <h6>Name</h6>
          <p>Likitha Eslavath</p>
          <h6>Contact Number</h6>
          <p>6280188300</p>
          <h6>DOB</h6>
          <p>23 February 2002</p>
          <h6>Gender</h6>
          <p>Female</p>
          <h6>Contacts Saved</h6>
          <p>9814227187</p>
          <h6>Medications</h6>
          <textarea id="freeform" name="freeform" rows="4" cols="30" placeholder="">

</textarea>
          {/* <p>Dipyridamole</p>
          <p>Captopril</p>
          <p>Nisoldipine</p> */}
        </div>
      </div>

     
    </div>
  );
}

export default Landingpage;
