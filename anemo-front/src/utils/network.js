import axios from 'axios';

const API_URL = 'http://localhost:8000/admin';
const apiUrlSignup = "http://localhost:8000/signup"
const apiUrlResponse = "http://localhost:8000/response"

export const postSignup = async (body) => {
    try {
        const response = await axios.post(`${apiUrlSignup}/signup`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}

export const postLogin = async (body) => {
    try {
        const response = await axios.post(`${apiUrlSignup}/login`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}

export const getQuestionList = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    // console.log('response in network.js', response);
    console.log('response.data', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// getQuestion version Mugi

// export const getQuestions = async () => {
//     try {
//         const token = localStorage.getItem("token")
//         const response = await axios.get(`${apiUrlAdmin}/`, { headers: { Authorization: `Bearer ${token}` } })
//         console.log("r", response.data)
//         return response.data
//     } catch (error) {
//         console.error(error)
//         return false
//     }
// }

export const getQuestion = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const postReponse = async (body) => {
    try {
        const response = await axios.post(`${apiUrlResponse}/`, body)

        return response.data
        console.log(response.data)
    } catch (error) {
        console.error(error)
        return false
    }
}

export const updateQuestion = async (id, body) => {
  try {
    await axios.patch(`${API_URL}/${id}`, body);
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const addQuestion = async (body) => {
  try {
    await axios.post(`${API_URL}/`, body);
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
