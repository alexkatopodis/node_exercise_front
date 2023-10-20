import { post } from './index';

const uploadXlsxFile = async (file) => {
  const formData = new FormData();
  formData.append('xlsxFile', file);

  try {
    const response = await post('/feedDB', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Error uploading the .xlsx file');
  }
};

export { uploadXlsxFile }
