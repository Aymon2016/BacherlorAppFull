

export const setCookie = (value) => {
    const values = JSON.stringify(value)
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = 'BachelorCookie' + "=" + values + "; " + expires + "; path=" + '/';
}

export const getCookie = () => {
    const token = document.cookie
    return token.substring(22)
}