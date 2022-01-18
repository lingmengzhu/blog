const initialState: any = {
    userId: null,
    username: null,
    token: null,
};

const user = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'User_Login':
            // 登录操作
            localStorage.setItem('token', action.userInfo.token);
            return {
                ...state,
                ...action.userInfo,
            };
        case 'User_Logout':
            // 登出操作
            localStorage.removeItem('token');
            return initialState;
        default:
            return state;
    }
};
export default user;
