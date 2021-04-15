export const sendHttpRequest = (url) => {
    return fetch(url)
      .then(response => {
        return response.json()
      })
  }

  export const fixedEncodeURIComponent= (str)=> {
    return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
  }
  
  