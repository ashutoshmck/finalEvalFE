/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { ADD_RECORD_URL, DELETE_RECORD_BY_RECORDID_URL, GET_RECORDS_BY_RECORDID_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './RecordsList.css';
import SideModal from '../SideModal';

function RecordsList(props) {
  const { collectionId } = props;
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [records, setRecords] = React.useState([]);
  const navigate = useNavigate();
  const [fields, setFields] = React.useState([]);
  // const fields = [];
  const getRecords = async () => {
    const listOfRecords = await makeRequest.makeRequest(
      GET_RECORDS_BY_RECORDID_URL(collectionId),
      navigate,
    );
    const list = ['ID'];
    for (const key in listOfRecords[0].content) {
      list.push(key);
    }
    list.push('Actions');
    setFields(list);
    return listOfRecords;
  };
  const handleModalClick = () => {
    setIsCreateModalOpen(true);
  };
  const handleAddRecord = async (record) => {
    const content = record;
    const newRecord = await makeRequest
      .makeRequest(ADD_RECORD_URL(collectionId), navigate, { data: { content } });
    setRecords([...records, newRecord]);
  };
  const deleteRecord = async (id) => {
    const listOfRecords = await makeRequest.makeRequest(
      DELETE_RECORD_BY_RECORDID_URL(collectionId, id),
      navigate,
    );
    console.log(listOfRecords);
    setRecords(records.filter((record) => record.id !== id));
  };

  useEffect(() => {
    getRecords().then((data) => {
      setRecords(data);
    });
  }, []);
  return (
    <div>
      <div className="title">
        <h1>
          {records.length}
          {' '}
          Entries Found
        </h1>
        <button type="button" onClick={handleModalClick}>
          <p>
            Add a new entry
          </p>
        </button>
      </div>
      {isCreateModalOpen && (
        <SideModal
          setIsOpen={setIsCreateModalOpen}
          fields={fields.filter((index) => index !== 'ID' && index !== 'Actions')}
          onSubmit={handleAddRecord}
        />
      )}

      <div className="fields">
        {fields.length > 4
          ? fields.slice(0, 4).map((field) => (
            <div className="field-key" key={field}>
              <p>{field}</p>
            </div>
          ))
          : fields.map((field) => (
            <div className="field-key" key={field}>
              <p>{field}</p>
            </div>
          ))}
        <div className="field-key">
          <p>Actions</p>
        </div>
      </div>
      <div className="records">
        <div className="record">
          {records.map((record) => (
            <div className="record-value">
              <p>{record.id}</p>
              {fields.length > 4
                ? fields.slice(1, 4).map((field) => <p>{record.content[field]}</p>)
                : fields.map((field) => <p>{record.content[field]}</p>)}
              <div className="actions">
                <button className="update-field-button" type="button">
                  <FiEdit color="grey" size="2em" />
                </button>
                <button className="delete-field-button" type="button" onClick={() => { deleteRecord(record.id); }}>
                  <RiDeleteBin6Line color="grey" size="2em" />
                </button>
              </div>
            </div>

          ))}
        </div>

      </div>

    </div>
  );
}
RecordsList.propTypes = {
  collectionId: PropTypes.number.isRequired,
};

export default RecordsList;
