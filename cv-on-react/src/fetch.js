
export const defaultConfig = {
  mode: "no-cors",
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}

export default class Fetch{

  static doCall(url, config = {...defaultConfig, method: 'GET'}) {
    return fetch( url )
      .then( resp  => resp.json() )
      .then( response => ( {response} ))
      .catch( error => ({ error }))
  }
}
