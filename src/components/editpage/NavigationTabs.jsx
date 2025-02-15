export default function NavigationTabs() {
    return (
      <div className="top-nav">
        <div className="nav-itemss">
          <a href="#obituary" className="nav-linkss"><i className="fa-solid fa-book-open"></i> My Story</a>
        </div>
        <div className="nav-itemss">
          <a href="#favorite" className="nav-linkss"><i className="fa-solid fa-star"></i> Favorites</a>
        </div>
        <div className="nav-itemss">
          <a href="#timeline" className="nav-linkss"><i className="fa-solid fa-arrow-right-to-bracket"></i> Timeline</a>
        </div>
        <div className="nav-itemss">
          <a href="#gallery" className="nav-linkss"><i className="fa-solid fa-film"></i> Gallery</a>
        </div>
        <div className="nav-itemss">
          <a href="#family-tree" className="nav-linkss">
            <i className="fa-solid fa-tree"></i> Family Tree
          </a>
        </div>
        <div className="nav-itemss">
          <a href="#memory-wall" className="nav-linkss">
            <i className="fa-solid fa-comment"></i> Memory Wall
          </a>
        </div>

      </div>
    );
  }
  