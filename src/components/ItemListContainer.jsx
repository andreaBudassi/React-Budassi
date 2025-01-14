import React from 'react';

function ItemListContainer({ greeting }) {
    return (
        <div className="container-style">
            <h2>{greeting}</h2>
            {/* Logica para futuros items */}
        </div>
    );
}

export default ItemListContainer;