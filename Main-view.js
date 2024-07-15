import Card from "./Card";
function MainView({tours,removeCard})
{
    return(
        <div className="container">
            <div>
                <h2 className="title"> Punjab Tourism </h2>
            </div>
            <div className="cards">
                {tours.map((tour)=>{
                    return <Card key={tour.id} {...tour}  removeCard={removeCard}></Card>
                })}
            </div>
        </div>
    );
}
export default MainView;