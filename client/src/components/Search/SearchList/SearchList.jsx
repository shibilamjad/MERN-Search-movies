import "./SearchList.css";

export function SearchList({ searchInput, prodcutsList }) {
  return (
    <div className="searchList-box-container">
      <div className="style-searchList">
        {!searchInput ? (
          <p className="items-not">Movie not fetched..❌</p>
        ) : prodcutsList.length === 0 ? (
          <p className="items-not">Items not available..❌</p>
        ) : (
          <div className="searchList-box">
            {prodcutsList.map((items) => (
              <div className="searchList-box" key={items.id}>
                <ul>
                  <li>
                    <div className="items-list">
                      <div className="img">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          alt={items.title}
                        />
                      </div>
                      <div className="item-details">
                        <div className="titlt-wrap">
                          <h1>{items.title}</h1>
                          <p>{items.vote_average}⭐</p>
                        </div>
                        <p className="category">{items.category}</p>
                        <p>{items.overview}</p>
                        {/* <button className="price">$ {items.price}</button> */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
