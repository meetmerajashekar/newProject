import axios from "axios";
const baseUrl = `http://test.e-prathibha.com/apis`;

export const login = (formData) => {
    try {
        return async dispatch => {
            await axios.post(`${baseUrl}/login`, formData)
                .then(response => {
                    console.log("response", response)
                })
        }
    } catch (error) {
        console.log("error", error)
    }
}