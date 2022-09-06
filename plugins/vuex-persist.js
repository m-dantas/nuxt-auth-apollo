import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  new VuexPersistence({
    key: 'pref',
    storage: window.sessionStorage
  }).plugin(store);
}