const productSelector = (state) => state.products;

const productFilterSelector = (state) => state.products.filters;

export { productSelector, productFilterSelector };
