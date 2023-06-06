import "./featuredProperties.css"
const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
        <span className="fpName">ApartHotel stare Miasto</span>
        <span className="fpCity">Old Town ,Poland krakow</span>
        <span className="fpPrice">Starting from ₹11,200</span>
        <div className="fpRating">
            <button>
                4.5
            </button>
            <span>Excellent</span>

        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">Old Town ,Poland krakow</span>
        <span className="fpPrice">Starting from ₹11,200</span>
        <div className="fpRating">
            <button>
                4.5
            </button>
            <span>Excellent</span>
            
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Old Town ,Poland krakow</span>
        <span className="fpPrice">Starting from ₹11,200</span>
        <div className="fpRating">
            <button>
                4.5
            </button>
            <span>Excellent</span>
            
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties
