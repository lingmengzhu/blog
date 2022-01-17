const initialState: any = {
    userId: null,
    username: null,
    token: null,
};

const user = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'User_Login':
            return {
                ...state,
                ...action.userInfo,
            };
        default:
            return state;
    }
};
export default user;
