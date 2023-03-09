/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { RiDeleteBin6Line, RiEdit2Fill } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import './ContentType.css';

function ContentType(props) {
  const { contentTypes } = props;
  const [currentContentType, setCurrentContentType] = React.useState(contentTypes[1]);
  const [fields, setFields] = React.useState([]);
  useEffect(() => {
    const list = [];
    for (const key in currentContentType.fields) {
      list.push([key, currentContentType.fields[key]]);
    }
    setFields(list);
  }, [currentContentType]);

  return (
    <div className="content-types-body">
      <div className="content-types-list">
        <div className="add-content-type">
          <button type="button">
            <p>+ New Type</p>
          </button>
        </div>
        {contentTypes.map((contentType) => {
          if (currentContentType.id === contentType.id) {
            return (
              <button type="button">
                <div className="content-type-item" key={contentType.id}>
                  <div className="content-type-item-name">
                    <p>{contentType.name}</p>
                    <p>{Object.keys(contentTypes).length}</p>
                  </div>
                </div>
              </button>
            );
          }
          return (
            <button type="button" onClick={() => setCurrentContentType(contentType)}>
              <div className="content-type-item-deselected" key={contentType.id}>
                <div className="content-type-item-name-deselected">
                  <p>{contentType.name}</p>
                  <p>{Object.keys(contentTypes).length}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="content-type-details">
        <h1>{currentContentType.name}</h1>
        <p>
          {Object.keys(currentContentType).length}
          {' '}
          Fields
        </p>
        <div className="add-field">
          <button type="button">
            <p>Add another field</p>
          </button>
        </div>

        {fields.map((field) => (
          <div className="field-item" key={field[0]}>
            <div className="field-item-name">
              <p>{field[0]}</p>
            </div>
            <div className="field-item-type">
              <p>{field[1]}</p>
            </div>

            <button className="update-field-button" type="button">
              <FiEdit color="grey" size="2em" />
            </button>
            <button className="delete-field-button" type="button">
              <RiDeleteBin6Line color="grey" size="2em" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ContentType;
