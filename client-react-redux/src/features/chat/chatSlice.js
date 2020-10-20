import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import socket from './socket';

export const loadAllMessagesAsync = createAsyncThunk(
    'chat/loadAllMessages',
    async function () {

    },
);

export const sendMessageAsync = createAsyncThunk(
    'chat/sendMessage',
    function (message) {
        socket.emit('chat', message);
    },
);

// const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum explicabo, dignissimos quas debitis beatae soluta fugit quidem praesentium quaerat ab? Autem iure expedita aliquam reiciendis tempora suscipit, debitis iste.';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [
            // { id: 1, time: '01:23', sender: 'me', text: lorem, status: 'sent' },
            // { id: 2, time: '01:23', sender: 'you', text: lorem, status: 'received' },
            // { id: 3, time: '01:23', sender: 'me', text: lorem, status: 'sent' },
            // { id: 4, time: '01:23', sender: 'you', text: lorem, status: 'received' },
            // { id: 5, time: '01:23', sender: 'me', text: lorem, status: 'sent' },
            // { id: 6, time: '01:23', sender: 'you', text: lorem, status: 'received' },
            // { id: 7, time: '01:23', sender: 'me', text: lorem, status: 'sent' },
            // { id: 8, time: '01:23', sender: 'you', text: lorem, status: 'received' },
            // { id: 9, time: '01:23', sender: 'me', text: lorem, status: 'sent' },
            // { id: 10, time: '01:23', sender: 'you', text: lorem, status: 'received' },
        ],
    },
    reducers: {
        truncateMessages(state) {
            state.messages.length = 0;
        },
        sendMessage(state, { payload: { time, sender, text } }) {
            state.messages.push({ time, sender, text, status: 'sent' });
        },
        receiveMessage(state, { payload: { time, sender, text } }) {
            state.messages.push({ time, sender, text, status: 'received' });
        }
    },
    extraReducers: {
        [sendMessageAsync.pending](state, { meta: { arg } }) {
            state.messages.push({ ...arg, status: 'pending' });
        },
        [sendMessageAsync.fulfilled](state, { type, payload }) {
        },
        [sendMessageAsync.rejected](state, { type, error }) {
        },
    },
});

export const { truncateMessages, sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;

