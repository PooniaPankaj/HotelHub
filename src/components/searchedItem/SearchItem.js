import "./searchItem.css"

const SearchItem = () => {
  return (
   <div className="searchItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/433812183.jpg?k=8cd24d2cf0a3e58e08241c94550c24fb42e9bf3610ff60a1aeb4cbe40c9052b5&o=" alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m From center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
        Beds: 1 double or 2 singles
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>

    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">₹ 11,200</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availbility</button>
        </div>

    </div>
   </div>
  )
}

export default SearchItem
