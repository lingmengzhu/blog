export const setUserInfo = (userInfo: any) => ({
    type: 'User_Login',
    userInfo,
});
export const resetUserInfo = (userInfo: any) => ({
    type: 'User_Logout',
    userInfo,
});
