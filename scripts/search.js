function storeSearchterm(term) {
 
    import  {apiCall, appendArticles} from "./scripts/main.js"
    let searching = localStorage.getItem('searchitems')
   console.log(searching)
    let res =await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${searching}`);
    // console.log(res)
   console.log("res",res)
    var parent =document.getElementById('main')
   appendArticles(res,parent)


}

export default storeSearchterm