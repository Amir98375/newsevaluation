async function apiCall(url) {

let res = await fetch(url)
let data = await res.json()
    
return data;

}


function appendArticles(articles, main) {
    console.log("hello",)
    articles.map(element => {
        
        var div = document.createElement('div')
    main.append(div)

    var img = document.createElement('img')
    img.src = element.urlToImage
    div.append(img)

    var p =document.createElement('p')
    p.innerText="content" +element.content
    div.append(p)
   
    div.onclick=()=>{
        localStorage.setItem('article',JSON.stringify(element))
        document.location.href='news.html'
    }

    });

    

}

export { apiCall, appendArticles }