export const sendHttpRequest = (url) => {
    return fetch(url)
      .then(response => {
        return response.json()
      })
  }
  