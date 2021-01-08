const Rating = (props) => {
    const { rating } = props;

    const items = [];

    for (let r=1;r<=5;r++) {
        if(r<=rating) items.push(<span key={r} className="fa fa-star checked" />);
        else items.push(<span key={r} className="fa fa-star" />);
    }

    return (
        <div className="rating">
            <div className="stars">
                {items}   
            </div>
            {/* <span className="review-no">41 reviews</span> */}
        </div>
    )
}

export default Rating;