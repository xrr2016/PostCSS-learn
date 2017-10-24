const Url = 'http://localhost:3000'

const Api = {
  getItems() {
    return fetch(`${Url}/items`).then(res => res.json())
  },
  getRecommends() {
    return fetch(`${Url}/recommends`).then(res => res.json())
  }
}
export default Api
