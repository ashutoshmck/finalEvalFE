import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Components from '../../components/index';
import { GET_CONTENT_TYPES } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';

function HomePage() {
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
    <div className="home-page">
      <Components.Sidebar />
      <div className="body">
        {
          collectionTypes.length === 0
            ? <div>Loading ....</div>
            : (
              <>
                <Components.Header title="Content Types" />
                <Components.ContentType contentTypes={collectionTypes} />
              </>
            )
        }
      </div>
    </div>
  );
}
export default HomePage;
