import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllMessagesAsync = createAsyncThunk(
    'chat/loadAllMessages',
    async function () {

    },
);

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum explicabo, dignissimos quas debitis beatae soluta fugit quidem praesentium quaerat ab? Autem iure expedita aliquam reiciendis tempora suscipit, debitis iste.';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [
            { id: 1, time: '01:23', sender: 'me', text: lorem },
            { id: 2, time: '01:23', sender: 'you', text: lorem },
            { id: 3, time: '01:23', sender: 'me', text: lorem },
            { id: 4, time: '01:23', sender: 'you', text: lorem },
            { id: 5, time: '01:23', sender: 'me', text: lorem },
            { id: 6, time: '01:23', sender: 'you', text: lorem },
            { id: 7, time: '01:23', sender: 'me', text: lorem },
            { id: 8, time: '01:23', sender: 'you', text: lorem },
            { id: 9, time: '01:23', sender: 'me', text: lorem },
            { id: 10, time: '01:23', sender: 'you', text: lorem },
        ],
    },
    reducers: {
        truncateMessages(state) {
            state.messages.length = 0;
        },
        addMessage(state, { payload: message }) {
            state.messages.push(message);
        },
    },
});

export const { truncateMessages, addMessage } = chatSlice.actions;

export default chatSlice.reducer;

