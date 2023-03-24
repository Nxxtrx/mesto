export default class UserInfo{
  constructor({profileName, profileTitle, profileAvatar}) {
    this._profileName = document.querySelector(profileName);
    this._profileTitle = document.querySelector(profileTitle);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  // получение данных с профиля
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileTitle.textContent
    }
  }

  // установка данных профиля с инпутов
  setUserInfo({name, description, userId}) {
    this._profileName.textContent = name;
    this._profileTitle.textContent = description;
    this._userId = userId;
  }

  setAvatar({newAvatarLink}) {
    this._profileAvatar.src = newAvatarLink;
  }

  getUserId() {
    return this._userId;
  }
}
