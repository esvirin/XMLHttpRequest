function sandRequest(method, url, body = null) {
  return fetch(url,{
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(response => {
    if(response.ok){
      return response.json()
    }
    return response.json().then(err => console.error(err))
  })
  }
