import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item-container">
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} className="item-image" />
      <p>Precio: ${product.precio}</p>
      <Link to={`/item/${product.id}`} className="item-detail-link">Ver Detalle</Link>
    </div>
  );
};

export default Item;