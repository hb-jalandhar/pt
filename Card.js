import { useState } from "react";

function Card({id,image,info,price,name,removeCard,url})
{
    const [RM , setRM] = useState(false);
    const description = RM ?  `${info} ` :`${info.substring(0,290)}....`;

    function rmHandler()
    {
        setRM(!RM);
    }
    function knowMore()
    {
        window.open({url}, "_blank")

    }
    function remove()
    {
        removeCard(id);
    }
    return(
        <div className="card">
            <img src={image} className="image" alt={name}></img>
            
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={rmHandler}>
                    {RM ? 'show less' : 'read more'}
                </span>
            </div>
            <div className="tour-buttons">
                <button className="btn-red" onClick={() => window.open(`${url}`,'_blank')} >Know More</button>
                <button className="btn-red" onClick={remove}>Not Interested</button>
            </div>
            </div>
        </div>
    );
}

export default Card;