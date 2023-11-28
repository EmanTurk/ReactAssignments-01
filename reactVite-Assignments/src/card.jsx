function Cards({image, title, description, link}){
   
    return(
        <div className="cardContainer">
         <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Learn More</a>


        </div>
    );
}

export default Cards;


