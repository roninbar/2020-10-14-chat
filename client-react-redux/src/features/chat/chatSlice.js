import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllMessagesAsync = createAsyncThunk(
    'chat/loadAllMessages',
    async function () {

    },
);

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [
            { id: 1, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
            { id: 2, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
            { id: 3, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
            { id: 4, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
            { id: 5, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
            { id: 6, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
            { id: 7, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
            { id: 8, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
            { id: 9, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
            { id: 10, sender: 'Nitai', time: '11:29', text: 'מישהו משהו?' },
            { id: 11, sender: 'me', time: '13:49', text: 'נראה לי שכמו שכתוב פה:' },
            { id: 12, sender: 'Nitai', time: '14:56', text: 'לא ממש הבנתי איך אני עושה את זה דרך הקליינט... מישהו הצליח?' },
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

