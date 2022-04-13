export class UserInfo {
  constructor({ userNameProfile, userSubnameProfile, userAvatarProfile }) {
    this._nameElement = document.querySelector(userNameProfile);
    this._jobElement = document.querySelector(userSubnameProfile);
    this._avatarElement = document.querySelector(userAvatarProfile);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      subname: this._jobElement.textContent,
    };
  }

  setUserInfo(title, subname, avatar) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = subname;
    this._avatarElement.src = avatar;
  }
}
