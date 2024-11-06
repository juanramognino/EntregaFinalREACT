import ape from "../../img/ape.svg";
import { Link } from "react-router-dom";

const Brand = () => {
    return(
        <Link to="/">
            <img src={ape} alt="Tienda Hard" title="Tienda Hard"></img>
        </Link>
    );
}

export default Brand;
