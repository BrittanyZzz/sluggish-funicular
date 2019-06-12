import axios from 'axios'

export default fetch = ({
  method = 'GET',
  url,
  params,
  data,
  timeout = 5000
  //headers
}) => {
  const options = {
    method,
    url,
    params,
    data: method === 'GET' ? null : data,
    timeout
  }

  return axios(options)
    .then(res => {
      return res
    }).catch(err => {
      throw err
    })
}