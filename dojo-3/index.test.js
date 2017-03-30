const assert = require('assert');

// Implement classes here

const product = new Product(1, "Chevrolet Cobalt", 2.0);
const buyer = new Buyer(2, "Presepeiro", false);
const seller = new Seller(5, "José", 50000);

var purchase = new Purchase(product, buyer, seller, 70000);

describe('Testing Classes and Methods', () => {
  it('Orçamento cabe no orçamento?', () => {
  	assert.equal(buyer.honestidadeCabeNoOrcamento, "Honestidade não cabe no meu orçamento.");
  });

  it('Bateu a meta?', () => {
  	assert.equal(purchase.seller.bateuMeta, true);
  });

  it('Descricao presepeiro', () => {
  	assert.equal("2 - Presepeiro - Honestidade não cabe no meu orçamento", buyer.toString());
  });

  it('Descricao vendedor', () => {
  	assert.equal("5 - José - meta de 50000 reais", seller.toString());
  });

  it('Descricao produto', () => {
  	assert.equal("1 - Chevrolet Cobalt 2.0", product.toString());
  });

  it('Descricao compra', () => {
  	assert.equal("Comprador: 2 - Presepeiro - Honestidade não cabe no meu orçamento\nVendedor: 5 - José - meta de 50000 reais\nProduto: 1 - Chevrolet Cobalt 2.0\nO que aconteceu? Venda de 70000.", purchase.toString());
  });
});