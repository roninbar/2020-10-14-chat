const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
    },
    reducers: {
        setUser(state, { payload: username }) {
            state.name = username;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

