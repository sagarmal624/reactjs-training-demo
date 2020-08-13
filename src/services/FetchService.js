import axios from 'axios';

/**
 * This will be used to trigger any http request.
 * @param {*} requestData will contain axios option object in which url is mandatory.
 *
 */
const fetchService = async requestData => {
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };
    const options = {
        ...requestData,
        headers: {
            ...defaultHeaders,
        },
    };
    try {
        const data = await axios(options); //changed {data} to data
        return data;
    } catch (error) {
        /** todo:: need to fix */
        return {error: error.message};
    }
};

export default fetchService;
