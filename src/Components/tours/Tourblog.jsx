import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import { BASE_URL } from "../utilities/Confiig";
import "../tours/tour.css"

const Tourblog = () => {
  const { id } = useParams();

  const {data} = UseFetch(`${BASE_URL}/tour/singletour/${id}`);
  console.log(data);
  const {booking} =UseFetch(`${BASE_URL}/slot/booking/${id}`)
  console.log(booking)

  return (
    <div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 single">
            {/* <img src={data.tour.img}  alt="img" className="simg " />
            <h4>{data.tour.location}</h4>
            <h5>{data.tour.heading}</h5>
            <h6>{data.tour.price}/per person</h6> */}
          </div>
          <div className="col-md-6">
            <form>
              <input type="text" placeholder="username" />
              <input type="tel" placeholder="phonenumber" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tourblog;
