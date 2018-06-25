import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        // api_url: 'http://localhost:31014',
        api_url: 'https://neighbiz-api.stratech.co.za',
        session: {
            navbar: [
                {to:"/", description:"Home"},
                {to:"/dashboard", description:"Dashboard"},
                {to:"/upload", description:"Upload"},
                {to:"/login", description:"Login"}
            ],
            authed: false,
            entity: {}
        },
    },
    mutations: {
        
    }
  })
}

export default createStore