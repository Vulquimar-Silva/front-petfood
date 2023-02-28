import './styles.css'

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img src="https://dashboard.clubevantagens.com.br/wp-content/uploads/listing-uploads/logo/2022/10/petlove_clubevantagens_logo.jpg" alt="Petshop logo" className='img-fluid' />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
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
    </li>
  )
}
export default Petshop;