import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_CONTENT_TYPES } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './Sidebar.css';

function Sidebar() {
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  const navigate = useNavigate();
  const getCollectionTypes = async () => {
    const contentTypes = await makeRequest.makeRequest(GET_CONTENT_TYPES, navigate);
    return contentTypes;
  };
  useEffect(() => {
    getCollectionTypes().then((data) => {
      setCollectionTypes(data);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p>CMS+</p>
      </div>
      <div className="sidebar-content">
        <p>COLLECTION TYPES</p>
        <div className="collection-types">
          {
            collectionTypes.map((collectionType) => (
              <div key={collectionType.id} className="sidebar-content-item">
                <p>&#x2022;</p>
                <p>{collectionType.name}</p>
              </div>
            ))
          }
        </div>
        <div className="content-type-builder">
          <p>Content Type Builder</p>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
