import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GET_CONTENT_TYPES } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import { HOME_ROUTE } from '../../constants/routes';
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
              <NavLink to={`/collections/${collectionType.id}/records`} className={({ isActive }) => (isActive ? 'selected-nav-link' : 'deselected-nav-link')}>
                <div key={collectionType.id} className="sidebar-content-item">
                  <p>&#x2022;</p>
                  <p>{collectionType.name}</p>
                </div>
              </NavLink>
            ))

          }
          <NavLink to={HOME_ROUTE} className={({ isActive }) => (isActive ? 'selected-nav-link' : 'deselected-nav-link')}>
            <div className="content-type-builder">
              <p>Content Type Builder</p>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
