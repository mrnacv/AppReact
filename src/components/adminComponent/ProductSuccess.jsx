import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductSuccess = () => {
    const { id } = useParams();

    return (
        <section className="success-page">
            <div className="success-icon">✅</div>

            <h2>Producto agregado exitosamente</h2>
            <p>ID de producto: {id}</p>
            <p>Puede cargar otro haciendo click en el botón</p>

            <Link className="btn bg-primary primary" to="/admin" replace>
                Agregar otro producto
            </Link>
        </section>
    );
};