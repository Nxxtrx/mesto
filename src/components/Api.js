export default class Api{
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _check(res) {
    if(res.ok) {
      return res.json()
    }else {
      return console.log("ошибка")
    }
  }


  getInitialCards() {
    this._request = this._baseUrl + '/cards';
    return fetch(this._request, {
      headers: this._headers
    }).then((res) => this._check(res))
  }

  getUserInfo() {
    this._request = this._baseUrl + '/users/me';
    return fetch(this._request, {
      headers: this._headers
    }).then((res) => this._check(res))
  }

  setUserInfo(name, about) {
    this._request = this._baseUrl + '/users/me';
    return fetch(this._request, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(name, about)
    }).then(res => this._check(res))
  }

  setUserAvatar(avatarUrl) {
    this._request = this._baseUrl + '/users/me/avatar';
    return fetch(this._request, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarUrl)
    }).then(res => this._check(res))
  }
}
