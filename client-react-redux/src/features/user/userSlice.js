import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { decode } from 'jsonwebtoken';

export const signUpAsync = createAsyncThunk(
    'user/signup',
    async function ({ username, password, firstName, lastName }) {
        const { status, statusText } = await requestJsonUsingForm('POST', '/api/user', { firstName, lastName, username, password });
        if (200 <= status && status < 300) {
            return { status, statusText };
        } else {
            throw new Error(`${status} ${statusText}`);
        }
    },
);

export const logInAsync = createAsyncThunk(
    'user/login',
    async function ({ username, password }) {
        return requestJsonUsingForm('POST', '/api/auth/login', { username, password });
    },
);

export const logOutAsync = createAsyncThunk(
    'user/logout',
    async function () {
        const { status, statusText } = await request('POST', '/api/auth/logout', { 
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (200 <= status && status < 300) {
            return statusText;
        } else {
            throw new Error(`${status} ${statusText}`);
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        pending: false,
        error: false,
        info: null,
    },
    extraReducers: {
        [logInAsync.pending](state) {
            localStorage.removeItem('token');
            state.info = null;
            state.error = false;
            state.pending = true;
        },
        [logInAsync.fulfilled](state, { payload: { token } }) {
            state.pending = false;
            state.info = decode(token);
            localStorage.setItem('token', token);
        },
        [logInAsync.rejected](state, { error }) {
            state.pending = false;
            state.error = error;
        },
        [logOutAsync.pending](state) {
            state.info = null;
            state.error = false;
            state.pending = true;
        },
        [logOutAsync.fulfilled](state) {
            state.pending = false;
            state.error = false;
            localStorage.removeItem('token');
        },
        [logOutAsync.rejected](state, { error }) {
            state.pending = false;
            state.error = error;
            localStorage.removeItem('token');
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

/**
 * 
 * @param {string} method The HTTP method to use.
 * @param {string} url The URL to send the request to.
 * @param {object} options An options object to pass to 'fetch'. The method option, if present, will be ignored.
 */
async function request(method, url, options = {}) {
    return await fetch(url, { ...options, method });
}

/**
 * Send a request containing form data, expecting a JSON response.
 * @param {string} method The HTTP method to use.
 * @param {string} url 
 * @param {object} fields An object whose properties represent the fields of the form.
 */
async function requestJsonUsingForm(method, url, fields) {
    const body = new URLSearchParams(Object.entries(fields));
    return await requestJson(method, url, { body });
}

/**
 * Send an HTTP request that expects a JSON response.
 * @param {string} method 
 * @param {string} url 
 * @param {object} options 
 */
export async function requestJson(method, url, options = {}) {
    const response = await fetch(url, { method, ...options });
    const { status, statusText } = response;
    if (200 <= status && status < 300) {
        return await response.json();
    }
    else {
        throw new Error(`${status} ${statusText}`);
    }
}

