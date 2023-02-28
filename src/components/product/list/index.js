import './styles.css'

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src="https://petbox.vteximg.com.br/arquivos/ids/157940-1000-1000/029ffbff2320007112d0e5c07aabd802380b6161.jpg?v=637336127705500000" alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Ração Royal Extra Life Carne para gatos Adultos 1kg</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  )
}
export default Product;