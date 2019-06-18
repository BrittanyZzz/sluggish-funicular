import fetch from '../utils/fetch'

const fetchFakeData = () => new Promise((resolve, reject) => {
  fetch({
    url: 'https://jsonplaceholder.typicode.com/todos/1'
  }).then(res => {
    return resolve(res)
  }).catch(err => {
    return reject(err)
  })
})

export {
  fetchFakeData
}