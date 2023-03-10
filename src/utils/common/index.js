import { VALIDATE_TOKEN } from '../../constants/apiEndpoints';
import makeRequest from '../makeRequest';

const validateToken = async (token) => {
  try {
    const decodedToken = await makeRequest.authMakeRequest(VALIDATE_TOKEN, null, { headers: { authorization: `Bearer ${token}` } });
    return decodedToken;
  } catch (error) {
    return null;
  }
};

export default validateToken;
