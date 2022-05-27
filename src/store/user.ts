const initialState: any = {
    userId: null,
    username: null,
    token: null,
    address: null,
    age: null,
    createTime: null,
    email: null,
    introduction: null,
    nickname: null,
    password: null,
    phone: null,
    profilePhoto: null,
    sex: null,
    _id: null,
};

const user = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'User_Login':
            // 登录操作
            localStorage.setItem('token', action.userInfo.token);
            console.log('action', action);
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
