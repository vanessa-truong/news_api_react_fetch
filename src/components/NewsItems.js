import { Link } from "react-router-dom";



const NewsItems = (props) => {

    return ( 
    <div className="news_block">
            <h1 className="headliner">{props.title}</h1>
            <div className="detail_flex">
            <img src={props.image} alt="img" className="img" />
            <div>
            <p className="published">{props.date}</p>
            <Link to={`/${props.id}`} state={props.allNews} className="readMore" >Read More</Link>
            </div>
            </div>
        </div>
    );
}

export default NewsItems;