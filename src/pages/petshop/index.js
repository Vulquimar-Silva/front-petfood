import Header from '../../components/header'
import ProductCard from "../../components/product/card";

import './styles.css'

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="https://dashboard.clubevantagens.com.br/wp-content/uploads/listing-uploads/logo/2022/10/petlove_clubevantagens_logo.jpg" alt="Petshop logo" className='img-fluid petshop-image' />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className='mdi mdi-star'></span>
              <span className='text'>
                <b>4,2</b>
              </span>
              <span className='mdi mdi-cash-usd-outline'></span>
              <span className='text'>$$$</span>
              <span className='mdi mdi-crosshairs-gps'></span>
              <span className='text'>2,9km</span>
            </div>
            <label className='badge badge-primary'>Frete grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                <ProductCard product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Petshop;