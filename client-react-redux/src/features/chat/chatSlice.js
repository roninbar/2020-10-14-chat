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

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
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
        },
    },
    extraReducers: {
        [sendMessageAsync.pending](state, { meta: { requestId: id, arg } }) {
            state.messages.push({ id, ...arg, status: 'pending' });
        },
    },
});

export const { truncateMessages, sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;

