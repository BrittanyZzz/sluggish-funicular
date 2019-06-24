import fetch from '../utils/fetch'

const fetchFakeData = (type = '') => new Promise((resolve, reject) => {
  fetch({
    url: `https://jsonplaceholder.typicode.com/todos/${type}`
  }).then(res => {
    return resolve(res)
  }).catch(err => {
    return reject(err)
  })
})

export {
  fetchFakeData
}