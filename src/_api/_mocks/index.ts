import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import usersData from '../_data/usersData'

const init = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 200 })

  mock.onGet('/users/profile').reply(200, {
    ...usersData.current,
  })

  mock.onGet('/users').reply(200, {
    users: {
      ...usersData.list,
    },
    count: usersData.list.length,
  })
}

export default {
  init,
}