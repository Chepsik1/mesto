export class Api {
  constructor({
    address,
    token,
  }) {
    this._address = address;
    this._token = token;
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  getInfoAndAvatar() {
    return fetch(`${this._address}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
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
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
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
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  newCard(info) {
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
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  countLikeApi(info) {
    return fetch(`${this._address}/cards/likes/${info._id}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  deleteLike(info) {
    return fetch(`${this._address}/cards/likes/${info._id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': this._contentType
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}