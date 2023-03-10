/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { RiDeleteBin6Line, RiEdit2Fill } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import './ContentType.css';
import { useNavigate } from 'react-router-dom';
import AddFieldModal from '../AddFieldModal';
import CreateContentTypeModal from '../CreateContentTypeModal';
import makeRequest from '../../utils/makeRequest';
import {
  ADD_CONTENT_TYPE_URL,
  ADD_FIELD_TO_CONTENT_TYPE_URL,
  DELETE_FIELD_FROM_CONTENT_TYPE_URL,
  UPDATE_NAME_OF_CONTENT_TYPE_URL,
} from '../../constants/apiEndpoints';

function ContentType(props) {
  let { contentTypes } = props;
  const [currentContentType, setCurrentContentType] = React.useState(contentTypes[1]);
  const [fields, setFields] = React.useState([]);
  const [isCreatingField, setIsCreatingField] = React.useState(false);
  const [isCreatingContent, setIsCreatingContent] = React.useState(false);
  const [isChangingContent, setIsChangingContent] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const list = [];
    for (const key in currentContentType.fields) {
      list.push([key, currentContentType.fields[key]]);
    }
    setFields(list);
  }, [currentContentType]);

  const updateNameOfContentType = async (name) => {
    const newContentType = await makeRequest.makeRequest(
      UPDATE_NAME_OF_CONTENT_TYPE_URL,
      navigate,
      { data: { name } },
    );
    contentTypes = contentTypes.map((contentType) => {
      if (contentType.name === name) {
        return newContentType;
      }
      return contentType;
    });
  };
  const addField = async (name) => {
    console.log(name);
    const newField = await makeRequest.makeRequest(
      ADD_FIELD_TO_CONTENT_TYPE_URL(currentContentType.id),
      navigate,
      { data: { name, type: 'Text' } },
    );
    setFields([...fields, newField]);
  };
  const deleteField = async (name) => {
    const newField = await makeRequest.makeRequest(
      DELETE_FIELD_FROM_CONTENT_TYPE_URL(currentContentType.id),
      navigate,
      { data: { name } },
    );
    setFields(fields.filter((field) => field[0] !== name));
  };
  const updateField = async (name) => {
    const newField = await makeRequest.makeRequest(
      DELETE_FIELD_FROM_CONTENT_TYPE_URL(currentContentType.id),
      navigate,
      { data: { name } },
    );
    setFields(fields.filter((field) => field[0] !== name));
  };

  const createContentType = async (name) => {
    const newContentType = await makeRequest.makeRequest(
      ADD_CONTENT_TYPE_URL,
      navigate,
      { data: { name } },
    );
    contentTypes.push(newContentType);
  };

  return (
    <div className="content-types-body">
      {isCreatingField && <AddFieldModal setIsOpen={setIsCreatingField} onSubmit={addField} />}
      {isCreatingContent && (
      <CreateContentTypeModal
        setIsOpen={setIsCreatingContent}
        title="Create Content Type"
        nameOfContent=""
        onSubmit={createContentType}
      />
      )}
      {isChangingContent && (
      <CreateContentTypeModal
        setIsOpen={setIsChangingContent}
        title="Change Content Type Name"
        nameOfContent={currentContentType.name}
        onSubmit={updateNameOfContentType}
      />
      )}
      <div className="content-types-list">
        <div className="add-content-type">
          <button
            type="button"
            onClick={() => {
              setIsCreatingContent(true);
            }}
          >
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
                    <p>{Object.keys(contentType.fields).length}</p>
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
                  <p>
                    {contentType.fields === null ? 0
                      : Object.keys(contentType.fields).length}

                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="content-type-details">
        <div className="content-type-title">
          <h1>{currentContentType.name}</h1>
          <button
            type="button"
            onClick={() => {
              setIsChangingContent(true);
            }}
          >
            <RiEdit2Fill color="grey" size="2em" />
          </button>
        </div>
        <p>
          {fields.length}
          {' '}
          Fields
        </p>
        <div className="add-field">
          <button
            type="button"
            onClick={() => {
              setIsCreatingField(true);
            }}
          >
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

            <button
              className="update-field-button"
              type="button"

            >
              <FiEdit color="grey" size="2em" />
            </button>
            <button
              className="delete-field-button"
              type="button"
              onClick={() => {
                deleteField(field[0]);
              }}
            >
              <RiDeleteBin6Line color="grey" size="2em" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ContentType;
