import React from "react";
import "./Form.scss";
import { countryCodes } from "../../constants/countryCodes";
import { useNavigate } from "react-router";

const Form: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <form className="medical-form">
        <div className="inner-form-wrapper">
          <div className="radio-wrapper">
            <h2>Only for Medical Treatment</h2>
            <div className="radio-group">
              <span className="radio-label">Treatment inquiry for</span>
              <label htmlFor="myself" className="radio-option">
                <input
                  type="radio"
                  id="myself"
                  name="inquiry"
                  value="myself"
                />
                <span>Myself</span>
              </label>
              <label htmlFor="someone" className="radio-option">
                <input
                  type="radio"
                  id="someone"
                  name="inquiry"
                  value="someone"
                />
                <span>Someone</span>
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="field name-field">
              <label htmlFor="patient-name">Name</label>
              <input
                type="text"
                id="patient-name"
                placeholder="Enter patients name"
              />
            </div>

            <div className="field phn-field">
              <label htmlFor="patient-phone">Phone</label>
              <div className="phone-input">
                <select id="country-code" name="cc">
                  {countryCodes.map((code) =>
                    <option value="code.code">{code.code}</option>
                  )}
                </select>
                <input type="tel" id="patient-phone" placeholder="Enter phone number" />
              </div>
            </div>

            <button type="submit" className="submit-btn" onClick={(e) => {
              e.preventDefault()
              navigate("/booking-summary")
            }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
