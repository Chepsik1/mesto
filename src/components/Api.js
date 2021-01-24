export class Api {
  constructor({
    address,
    token,
  }) {
    this._address = address;
    this._token = token;
  }
  _getResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(res => this._getResponse(res))
  }

  getInfoAndAvatar() {
    return fetch(`${this._address}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(res => this._getResponse(res))
  }

  updateInfo(info) {
    return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          info
        )
      })
      .then(res => this._getResponse(res))
  }

  updateAvatar(info) {
    return fetch(`${this._address}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          info
        )
      })
      .then(res => this._getResponse(res))
  }

  addNewCard(info) {
    return fetch(`${this._address}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          info
        )
      })
      .then(res => this._getResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => this._getResponse(res))
  }

  countLikeApi(info) {
    return fetch(`${this._address}/cards/likes/${info._id}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => this._getResponse(res))
  }

  deleteLike(info) {
    return fetch(`${this._address}/cards/likes/${info._id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => this._getResponse(res))
  }
}