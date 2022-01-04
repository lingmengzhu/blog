const initialState: any = {
    _id: null,
    username: null,
    token: null,
};

const user = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'Login':
            return state;
        default:
            return state;
    }
};
export default user;
