function storageModel(storagename){
  return {
    saveStorage: function(payload){
      window.localStorage.setItem(storagename, payload)
    },
    getStorage: function(){
      return window.localStorage.getItem(storagename)
    },
    removeStorage: function(){
      window.localStorage.removeItem(storagename)
    }
  }
}

var MsSearchHistory = new storageModel('MsSearchHistory')

export default {
  MsSearchHistory
}
