import React, { useState } from "react";
import "./JobPostForm.css";
import TextField from "@mui/material/TextField";

const JobPostForm = () => {

  const [salary, setSalary] = useState("fixed");
  const handleSalary = (value) => {
    setSalary(value);
    console.log(value);
  };

  return (
    <div className="form-container">
      <h3>Post a New <span style={{ color: "#1967d2", fontWeight: "800" }}>Job!</span></h3>
      <div className="form-main-container">
        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="job title">Job Title* : </label>
            <br />
            <input type="text" placeholder="Graphics" />
            {/* <TextField id="outlined-basic" label="Job Title" variant="outlined" className="customTextField"/> */}
          </div>
          <div className="input-fields">
            <label htmlFor="Job Category">Job Category*: </label>
            <br />
            <input type="text" placeholder="UI/UX designer" />
            {/* <TextField id="outlined-basic" label="Job Category" variant="outlined" className="customTextField"/> */}
          </div>
        </div>

        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Experience Level">Minimum Experience Level* : </label>
            <br />
            <input type="text" placeholder="2 years" />
            {/* <TextField id="outlined-basic" label="Experience Level" variant="outlined" className="customTextField"/> */}
          </div>
          <div className="input-fields">
            <label htmlFor="Job type">Job Type : </label>
            <select id="mySelect">
              <option value="option1">Full Time</option>
              <option value="option2">Part Time</option>
              <option value="option3">Contract</option>
              <option value="option3">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Email Address">Email Address* : </label>
            <br />
            <input type="text" placeholder="@user123gmail.com" />
            {/* <TextField id="outlined-basic" label="Experience Level" variant="outlined" className="customTextField"/> */}
          </div>
          <div className="input-fields">
            <label htmlFor="Qualification">Qualification*: </label>
            <br />
            <input type="text" placeholder="Bsc in Computer Science" />
            {/* <TextField id="outlined-basic" label="Job Type" variant="outlined" className="customTextField"/> */}
          </div>
        </div>

        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Vacancies">Vacancies* : </label>
            <br />
            <input type="text" placeholder="05 Persons" />
            {/* <TextField id="outlined-basic" label="Vacancies" variant="outlined" className="customTextField"/> */}
          </div>
          <div className="input-fields">
            <label htmlFor="Vacancies">Salary/Budget* : </label>
            <br />

            <div className="salary_type">
              <div className="salary">
                <label htmlFor="Amount">Fixed Salary</label>
                <input
                  type="radio"
                  name="radioGroup"
                  id=""
                  value="fixed"
                  checked={salary === "fixed"}
                  onChange={() => handleSalary("fixed")}
                />
              </div>
              <div className="salary">
                <label htmlFor="Amount">Max Salary</label>
                <input
                  type="radio"
                  name="radioGroup"
                  id=""
                  value="max"
                  checked={salary === "max"}
                  onChange={() => handleSalary("max")}
                />
              </div>
              <div className="salary">
                <label htmlFor="Amount">Min Salary</label>
                <input
                  type="radio"
                  name="radioGroup"
                  id=""
                  value="min"
                  checked={salary === "min"}
                  onChange={() => handleSalary("min")}
                />
              </div>
            </div>
            {
              salary === "fixed" ? (
                <input type="text" placeholder="Salary" />
              ) : salary === "max" ? (
                <input type="text" placeholder="Max Salary" />
              ) : (
                <input type="text" placeholder="Min Salary" />
              )
            }

          </div>
        </div>

        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Deadline">Deadline* : </label>
            <br />
            <input type="date" />
          </div>
          <div className="input-fields">
            <label htmlFor="gender">Gender : </label>
            <select id="mySelect">
              <option value="option1">Male</option>
              <option value="option2">Female</option>
              <option value="option3">Others</option>
            </select>
          </div>
        </div>

        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Description">Job Description* : </label>
            <br />
            <textarea
              name="Description"
              id="Description"
              cols="50"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Key Responsibilities">Key Responsibilities* : </label>
            <br />
            <textarea
              name="Key Responsibilities"
              id="Description"
              cols="50"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Skills">Key Skills* : </label>
            <br />
            <textarea
              name="Skills"
              id="Description"
              cols="50"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="Address">Address* : </label>
            <br />
            <textarea
              name="Description"
              id="Description"
              cols="50"
              rows="5"
            ></textarea>
          </div>
        </div>



        <div className="form_field_1">
          <div className="input-fields">
            <label htmlFor="country">Country : </label>
            <select id="mySelect">
              <option value="option1">India</option>
              <option value="option2">America</option>
              <option value="option3">Russia</option>
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="City">City : </label>
            <select id="mySelect">
              <option value="option1">Jaipur</option>
              <option value="option2">Jodhpur</option>
              <option value="option3">Delhi</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit" className="post_job_btn">
        Post Job
      </button>
    </div>
  );
};

export default JobPostForm;
