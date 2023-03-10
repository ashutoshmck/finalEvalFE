/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';

export default function SideModal(props) {
  const { setIsOpen, fields, onSubmit } = props;
  const content = {};
  const handleInputChange = (field, value) => {
    content[field] = value;
  };

  return (
    <div className="dark-bg">
      <div className="right">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className="heading">New Company_Profile</h5>
          </div>
          {fields.map((field) => (
            <div className="modal-content">
              <p>{field}</p>
              <input
                type="text"
                className="modal-input"
                onChange={(event) => {
                  handleInputChange(field, event.target.value);
                }}
              />
            </div>
          ))}
          <div className="modal-actions">
            <div className="actions-container">
              <button type="button" className="cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
              <button
                type="button"
                className="create-btn"
                onClick={() => {
                  setIsOpen(false);
                  onSubmit(content);
                }}
              >
                Add

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
