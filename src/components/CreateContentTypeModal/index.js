/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './CreateContentTypeModal.css';
import PropTypes from 'prop-types';

export default function CreateContentTypeModal(props) {
  const {
    setIsOpen, title, nameOfContent, onSubmit,
  } = props;
  const [name, setName] = React.useState(title);

  return (
    <div className="dark-bg">
      <div className="centered">
        <div className="field-modal">
          <div className="modal-header">
            <h5 className="heading">{title}</h5>
          </div>
          <div className="modal-content">
            <input
              type="text"
              placeholder="Name"
              defaultValue={nameOfContent}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel

            </button>
            <button
              type="button"
              className="create-btn"
              onClick={() => {
                setIsOpen(false);
                onSubmit(name);
              }}
            >
              Create
            </button>
          </div>
          {/* <div className="modal-actions">
            <div className="actions-container">
              <button type="button" className="cancel-btn"
              onClick={() => setIsOpen(false)}>Cancel</button>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

CreateContentTypeModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  nameOfContent: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
