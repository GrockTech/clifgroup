
import image1 from "../assets/1.jpeg";
// import image2 from '../assets/2.jpeg'
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
//import imagee1 from "../assets/i"
function ProdcutSection(){

<div>
     <section className="container mt-4 ">
        <div id="magin"></div>
        <div className="block">
          <div className="container mt-26" id="service">
            <div>
              <h2 className="text-black "> Products</h2>
              <p className="text-center text-black">
                we are expect in imports and exports.{" "}
              </p>
            </div>
            <div className="row row-cols-2">
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image4} alt="caterpillar" className="img-fluid" />
                </div>
              </div>

              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image1} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image3} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image5} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
              {/* rmb exhcnage */}
            </div>
          </div>
        </div>
      </section>
  
</div>

}
export default ProdcutSection