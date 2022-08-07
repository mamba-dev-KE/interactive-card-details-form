import cardBack from '../../assets/images/bg-card-back.png';
import cardFront from '../../assets/images/bg-card-front.png';
import './Cards.scss';

const Cards = () => {
  return (
    <div className="card-container">
      <img
        src={cardBack}
        alt=""
        className="card-item card-item--back"
      />
      <img
        src={cardFront}
        alt=""
        className="card-item card-item--front"
      />
    </div>
  );
};

export default Cards;
