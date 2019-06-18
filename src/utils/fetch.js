import axios from 'axios'

const fetch = ({
  method = 'GET',
  url,
  params,
  data,
  timeout = 10000
  //headers
}) => {
  const options = {
    method,
    url,
    params,
    data: method === 'GET' ? null : data,
    timeout
  }

  console.log({options})

  return axios(options)
    .then(res => {
      return res
    }).catch(err => {
      throw err
    })
}

export default fetch