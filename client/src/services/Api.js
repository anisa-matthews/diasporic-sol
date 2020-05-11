import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://diasporic-sol.herokuapp.com/`
  })
}
