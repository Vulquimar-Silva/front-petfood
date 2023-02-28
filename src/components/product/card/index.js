import "./styles.css";

const ProductCard = () => {
  return (
    <div className="product col-3">
      <img
        src="https://www.pedigree.com.br/sites/g/files/fnmzdf2351/files/2022-10/7896029095744-product-image-1.png"
        alt="Product logo"
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle"> + </button>
      <h4>
        <label className="badge badge-primary">
          R$ 60,00
        </label>
      </h4>
      <small>
        <b>Ração Pedigree para Cães com mais de 7 anos de idade</b>
      </small>
    </div>
  )
}
export default ProductCard;