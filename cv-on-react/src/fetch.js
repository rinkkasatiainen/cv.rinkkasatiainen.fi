
export const defaultConfig = {
  mode: "no-cors",
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}

export default class Fetch{

  static doCall(url, config = {...defaultConfig, method: 'GET'}) {
    console.log ( 'haha' )
    return fetch( url  ).then(resp => resp.json() )
  }
}
