checkCookies();

function checkCookies () {
    if (document.cookie.split(';').some((item) => item.includes('user=true'))) {
        document.write("Hello, nice to see you here again!!!")
    }
}

function clearCookies() {
    document.cookie = ("user=;")
    console.log(document.cookie);
}

function setCookies() {
    document.cookie = ("user=true;")
    console.log(document.cookie);
}
