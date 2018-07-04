import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        // api_url: 'http://localhost:31001',
        api_url: 'http://wcwines-api-stage.strathost.co.za/',
        session: {
            navbar: [
                {to:"/", description:"Home"},
                // {to:"/dashboard", description:"Dashboard"},
                // {to:"/upload", description:"Upload"}
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