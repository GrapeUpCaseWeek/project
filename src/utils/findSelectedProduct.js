export default function findSelectedProduct (products, id) {
    return products.find(item => item.id === id);
};
