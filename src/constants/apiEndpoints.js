export const BACKEND_URL = 'http://localhost:8080/';
export const AUTH_BACKEND_URL = 'http://localhost:5000/';

export const LOGIN = {
  url: 'login',
  method: 'post',
};

export const REGISTER = {
  url: 'user',
  method: 'post',
};

export const VALIDATE_TOKEN = {
  url: 'token/validate',
  method: 'post',
};

export const GET_CONTENT_TYPES = {
  url: 'content_types',
  method: 'get',
};

export const GET_RECORDS_BY_RECORDID_URL = (recordId) => ({
  url: `collections/${recordId}/records`,
  method: 'get',
});

export const ADD_CONTENT_TYPE_URL = {
  url: 'content_types',
  method: 'post',
};

export const ADD_FIELD_TO_CONTENT_TYPE_URL = (contentTypeId) => ({
  url: `content_types/${contentTypeId}/fields`,
  method: 'post',
});

export const DELETE_FIELD_FROM_CONTENT_TYPE_URL = (contentTypeId) => ({
  url: `content_types/${contentTypeId}/fields`,
  method: 'delete',
});
export const UPDATE_FIELD_FROM_CONTENT_TYPE_URL = (contentTypeId) => ({
  url: `content_types/${contentTypeId}/fields`,
  method: 'put',
});

export const UPDATE_NAME_OF_CONTENT_TYPE_URL = (contentTypeId) => ({
  url: `content_types/${contentTypeId}`,
  method: 'patch',
});

export const ADD_RECORD_URL = (collectionId) => ({
  url: `collections/${collectionId}/records`,
  method: 'post',
});

export const DELETE_RECORD_BY_RECORDID_URL = (collectionId, recordId) => ({
  url: `collections/${collectionId}/records/${recordId}`,
  method: 'delete',
});
