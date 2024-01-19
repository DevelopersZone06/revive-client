const Navbar = () => {
  return (
    <>
      <div className="navbar items-center justify-between flex-col lg:flex-row">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/PDGbWGh/icons8-video-conference-64.png"
            alt=""
          />
          <h4>Revive</h4>
        </div>
        <div>
          <ul className="flex gap-5 flex-wrap justify-center">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Events</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
            <li className="border-e-2">Contact</li>
            <li className="w-7">
              <img src="https://i.ibb.co/12BnwFJ/icons8-search-64.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
