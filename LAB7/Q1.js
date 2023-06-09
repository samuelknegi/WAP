function askPassWord(ok, fail) {
    let pw = prompt("password", '')
    if (pw == "rockstar") ok();
    else fail();

}
let user = {
    name: 'john',
    loginOk() {
        alert(this.name + 'logged in');
    },
    loginFail() {
        alert(this.name + 'failed to log in')
    },
};
askPassWord.apply(user, [user.loginOk, user.loginFail])