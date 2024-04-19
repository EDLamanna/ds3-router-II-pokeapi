import { Link } from "react-router-dom";

const ReturnBtn = () => {
  return (
    <Link to="/pokemones" className="returnBtn">
      Regresar
    </Link>
  );
};

export default ReturnBtn;
