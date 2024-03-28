import qr from "../img/qr.png";

export const Footer = () => {
  return (
    <>
      <section className="text-gray-400  body-font  ">
        <div className="container px-5 pt-20 mx-auto flex flex-wrap justify-center">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto content-start sm:pr-10 lg:w-4/5">
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex-shrink-0 text-dark-color">
              <ul>
                <li>Our History</li>
                <li>Contact</li>
                <li>Products</li>
              </ul>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex-shrink-0 text-dark-color">
              <ul>
                <li>New In</li>
                <li>Fragances</li>
                <li>Home & Deco</li>
              </ul>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex-shrink-0 text-dark-color">
              <ul>
                <li>Sale</li>
                <li>Stores</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center lg:justify-end sm:justify-center">
              <div className="flex items-center space-x-4">
                <i className="fa-brands fa-facebook-f mr-2 text-2xl text-dark-color"></i>
                <i className="fa-brands fa-instagram mr-2 text-2xl text-dark-color"></i>
                <i className="fa-brands fa-pinterest-p mr-2 text-2xl text-dark-color"></i>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="flex flex-col items-center py-5 container mx-auto px-5 text-dark-color">
            <img src={qr} alt="" className="rounded my-4" />
            <p className="text-center mt-4 font-light text-sm  text-dark-color">
              ANNAT COMPANY ® - CANDLES AND HOME DECO | ALL RIGHTS RESERVED |
              DESIGNED & DEVELOPED BY IAMPEDROLUIS DEV FRONT-END
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
