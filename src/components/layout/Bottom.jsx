import { IoLocationSharp } from "react-icons/io5";
import { BiLink } from "react-icons/bi";
import { HiBuildingOffice } from "react-icons/hi2";

const Bottom = ({ data: { location, blog, company } }) => (
  <>
    <div className="info">
      <IoLocationSharp className="w-7 h-7 mr-2" />
      <span>{location || "Not Available"}</span>
    </div>
    <div className="info">
      <BiLink className="w-7 h-7 mr-2" />
      <span>{blog || "Not Available"}</span>
    </div>
    <div className="info">
      <HiBuildingOffice className="w-7 h-7 mr-2" />
      <span>{company || "Not Available"}</span>
    </div>
  </>
);

export default Bottom;
