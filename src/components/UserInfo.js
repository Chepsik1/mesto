export class UserInfo {
    constructor({
        profileNameSelector,
        profileAboutSelector
    }) {
        this._name = document.querySelector(profileNameSelector);
        this._about = document.querySelector(profileAboutSelector);
    }

    getUserInfo() {
        const userInfoObj = {};
        userInfoObj.name = this._name.textContent;
        userInfoObj.about = this._about.textContent;

        return userInfoObj;
    }

    setUserInfo(object) {
        this._name.textContent = object.profileName;
        this._about.textContent = object.profileAbout;
       
    }
}