import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import NewsDetails from "./NewsDetails";



const Newslist = () => {

const [news, setNews] = useState([]);
const [search, setSearch] = useState(false);
const [searchInput, setSearchInput] = useState("");
const [language, setLanguage] = useState("")

useEffect(() => {
    if (!searchInput) {
        return
    }

    console.log(searchInput);
    fetch(`https://newsapi.org/v2/everything?q=${searchInput ? searchInput : "bitcoin"}&language=${language}&apiKey=6e39281522164f988a78c9e0a240302c`)
        .then(res=>res.json())
        .then(json=> {
            setNews(json.articles);
        })
} , [search])

// console.log(searchInput);
console.log(news);

    return ( 
        <section>
    <form action="" className="form">
        <input 
        type="text" 
        className="input" 
        id="input" 
        placeholder="searching news..." 
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        />
    <select name="language" className="language"  onChange={(event) => setLanguage(event.target.value)}>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="el">Greek</option>
        <option value="fr">France</option>
        <option value="ja">Japan</option>
        <option value="pt">Portugese</option>
        <option value="tr">Turkish</option>
        <option value="zh">Chinese</option>
        <option value="sv">Sweden</option>
        <option value="pl">Polska</option>
        <option value="af">Afrikaans</option>
        <option value="it">Italy</option>
        <option value="ru">Russia</option>
    </select>
        <input type="button" value="Search" onClick={() => setSearch(!search)} className="searchbar" />
    </form>
    <div>
        {news.map((elt, i) => {
            return (
        <NewsItems 
        key={i}
        image={elt.urlToImage}
        title={elt.title}
        date={elt.publishedAt}
        id={elt.id}
        allNews={elt}
        />
        )})}
        </div>
        </section>
    )}

export default Newslist;