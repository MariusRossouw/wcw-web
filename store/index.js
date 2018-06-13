import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        api_url: '//canserve-api.stratech.co.za',
        session: {
            navbar: [
                {to:"/", description:"Home"},
                {to:"/about", description:"About"},
                {to:"/contactUs", description:"Contact Us"}
            ]
        },
        entity: {}
    },
    mutations: {
        
    }
  })
}

export default createStore