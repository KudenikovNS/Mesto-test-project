export class UserInfo {
  constructor({ userNameProfile, userSubnameProfile }) {
    this._name = userNameProfile;
    this._subname = userSubnameProfile;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      subname: this._subname.textContent,
    };
  }

  setUserInfo(name, subname) {
    this._name.textContent = name;
    this._subname.textContent = subname;
  }
}
