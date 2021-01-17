import api from '../infrastructure/api';

export const searchByTitle = title => api.get(`?t=${title}`);

export const searchById = id => api.get(`?i=${id}`);
