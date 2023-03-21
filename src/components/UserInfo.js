export default class UserInfo{
  constructor({profileName, profileTitle, profileAvatar}) {
    this._profileName = document.querySelector(profileName);
    this._profileTitle = document.querySelector(profileTitle);
    this._profileAvatar = document.querySelector(profileAvatar)

  }

  // получение данных с профиля
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileTitle.textContent
    }
  }

  // установка данных профиля с инпутов
  setUserInfo(formList) {
    const {name, description} = formList;

    this._profileName.textContent = name;
    this._profileTitle.textContent = description;
  }

  setAvatar({newAvatarLink}) {
    this._profileAvatar.src = newAvatarLink
  }


}
