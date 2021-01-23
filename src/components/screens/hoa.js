import React from "react";

function Hoa(props) {
  return (
    <div class="card2 show ml-2">
      <div class="row px-3 mt-3 mb-4">
        <div class="col-sm-4">
          <label>HOA-I Company Name</label>
          <input type="text" class="form-control" name="HOA_company1" placeholder="House No" />
        </div>
        <div class="col-sm-4">
          <label>HOA-I Contact Name</label>
          <input type="text" class="form-control" name="HOA_contact1" placeholder="HOA-I Contact Name" />
        </div>
        <div class="col-sm-4">
          <label>HOA-I Phone No</label>
          <input type="text" class="form-control" name="HOA_phone1" placeholder="HOA-I Phone No" />
        </div>
      </div>

      <div class="row px-3 mt-3 mb-4 ">
        <div class="col-sm-4">
          <label>HOA-I Email</label>
          <input type="email" class="form-control" name="HOA_email1" placeholder="HOA-I Email" />
        </div>
        <div class="col-sm-4">
          <label>Frequency</label>
          <input type="text" class="form-control" name="frequency1" placeholder="House No" />
        </div>

        <div class="col-sm-4">
          <label>HOA-I Amount</label>
          <input type="text" class="form-control" name="HOA_amount1" placeholder="HOA-I Amount" />
        </div>
      </div>

      <div class="row px-3 mt-3 mb-4 ">
        <div class="col-sm-4">
          <label>HOA-II Company Name</label>
          <input type="text" class="form-control" name="HOA_company2" placeholder="HOA-II Company Name" />
        </div>
        <div class="col-sm-4">
          <label>HOA-II Contact Name</label>
          <input type="text" class="form-control" name="HOA_contact2" placeholder="HOA-II Contact Name" />
        </div>
        <div class="col-sm-4">
          <label>HOA-II Phone No</label>
          <input type="text" class="form-control" name="HOA_phone2" placeholder="HOA-II Phone No" />
        </div>
      </div>

      <div class="row px-3 mt-3 mb-4 ">
        <div class="col-sm-4">
          <label>HOA-II Email</label>
          <input type="email" class="form-control" name="HOA_email2" placeholder="HOA-II Email" />
        </div>
        <div class="col-sm-4">
          <label>Frequency</label>
          <input type="text" class="form-control" name="frequency2" placeholder="Frequency" />
        </div>

        <div class="col-sm-4">
          <label>HOA-II Amount</label>
          <input type="text" class="form-control" name="HOA_amount2" placeholder="HOA-II Amount" />
        </div>
      </div>
    </div>
  );
}

export default Hoa;
