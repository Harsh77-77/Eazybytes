// // src/services/api.js

// export const postData = async (endpoint, data) => {
//     try {
//       const response = await fetch(`http://localhost:5000/${endpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error making POST request:', error);
//     }
//   };
  
// const API_URL = 'http://localhost:5000/api';

// export const submitContact = async (contactData) => {
//   try {
//     const response = await fetch(`${API_URL}/submit-contact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to submit contact form');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error submitting contact form:', error);
//     throw error;
//   }
// };

// // Test API connection
// export const testConnection = async () => {
//   try {
//     const response = await fetch(`${API_URL}/test`);
//     if (!response.ok) {
//       throw new Error('API test failed');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error testing API connection:', error);
//     throw error;
//   }
// };

const API_URL = 'https://backen-portfolio.vercel.app/api';

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/submit-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit contact form');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Test API connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_URL}/test`);
    if (!response.ok) {
      throw new Error('API test failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error testing API connection:', error);
    throw error;
  }
};
