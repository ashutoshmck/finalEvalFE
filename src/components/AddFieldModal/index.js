/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './AddFieldModal.css';
import PropTypes from 'prop-types';

export default function AddFieldModal(props) {
  const { setIsOpen, title, onSubmit } = props;
  const [name, setName] = React.useState('');

  return (
    <div className="dark-bg">
      <div className="centered">
        <div className="field-modal">
          <div className="modal-header">
            <h5 className="heading">Add Field</h5>
          </div>
          <div className="modal-content">
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button type="button" className="cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
            <button
              type="button"
              className="create-btn"
              onClick={() => {
                setIsOpen(false);
                onSubmit(name);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

AddFieldModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
