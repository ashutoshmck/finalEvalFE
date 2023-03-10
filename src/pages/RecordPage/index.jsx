/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import Components from '../../components';
import './RecordsPage.css';

function RecordsPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="records-page">
      <Components.Sidebar />
      <div className="records-page-body">
        <Components.Header title="Records" />
        <Components.RecordsList collectionId={id} />
      </div>

    </div>

  );
}

export default RecordsPage;
