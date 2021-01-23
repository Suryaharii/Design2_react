import React from "react";

const House = props => {
  return (
    <div class="card2 first-screen show ml-2">
      <div class="row px-3 mt-4">
        <div class="col-sm-3">
          <label>
            House No&nbsp;
            <span title="This field is required" style={{ color: "red", fontSize: "18px" }}>
              *
            </span>
          </label>
          <input type="number" class="form-control" name="house_no" placeholder="House No" />
        </div>
        <div class="col-sm-3">
          <label>
            Street Name&nbsp;
            <span title="This field is required" style={{ color: "red", fontSize: "18px" }}>
              *
            </span>
          </label>
          <input type="text" class="form-control" name="street_name" placeholder="Street Name" />
        </div>
        <div class="col-sm-3">
          <label>City</label>
          <input type="text" class="form-control" name="city" placeholder="City" />
        </div>
        <div class="col-sm-3">
          <label>State</label>
          <input type="text" class="form-control" name="state" placeholder="State" />
        </div>
      </div>

      <div class="row px-3 mt-4">
        <div class="col-sm-3">
          <label>Country</label>
          {/* <input type="text" name="country" class="form-control" placeholder="Country">
                                                                    	<option>India</option>
                                                                        <option>USA</option>
                                                                </select> */}
        </div>
        <div class="col-sm-3">
          <label>
            Zip Code&nbsp;
            <span title="This field is required" style={{ color: "red", fontSize: "18px" }}>
              *
            </span>
          </label>
          <input type="number" class="form-control" name="zip_code" placeholder="Zip Code" />
        </div>
        <div class="col-sm-3">
          <label>
            Primary House?&nbsp;
            <span title="This field is required" style={{ color: "red", fontSize: "18px" }}>
              *
            </span>
          </label>
          {/* <input type="text" name="primary_house" class="form-control" placeholder="Primary House">
                                                                <!--<option>Yes</option>
                                                                    <option>No</option>
                                                                </select>--> */}
        </div>
        <div class="col-sm-3">
          <label>Built Year</label>
          <input type="number" class="form-control" name="built" placeholder="Built Year" />
        </div>
      </div>

      <div class="row px-3 mt-4">
        <div class="col-sm-3">
          <label>Survey Number</label>
          <input type="number" class="form-control" name="survey" placeholder="Survey Number" />
        </div>
        <div class="col-sm-3">
          <label>Purchase Amount</label>
          <input type="number" class="form-control" name="purchase_amount" placeholder="Purchase Amount" />
        </div>
        <div class="col-sm-3">
          <label>
            Purchase Date&nbsp;
            <span title="This field is required" style={{ color: "red", fontSize: "18px" }}>
              *
            </span>
          </label>
          <input type="date" class="form-control" name="purchase_date" placeholder="Purchase Date" />
        </div>
        <div class="col-sm-3">
          <label>Builder Name</label>
          <input type="text" class="form-control" name="builder_name" placeholder="Builder Name" />
        </div>
      </div>

      <div class="row px-3 mt-4">
        <div class="col-sm-3">
          <label>Subdivision Name</label>
          <input type="text" class="form-control" name="subdiv_name" placeholder="Subdivision Name" />
        </div>
        <div class="col-sm-3">
          <label>HMO</label>
          {/* <input type="text" name="hmo" placeholder="HMO" class="form-control">
                                                                <!--<option>Yes</option>
                                                                    <option>No</option>
                                                                </select>--> */}
        </div>
      </div>
    </div>
  );
};

export default House;
