import './App.scss';

function App() {
  return (
    <>
      <div className="store">
        <header className="store__announcement">
          <p className="store__announcement-text">Frete grátis para todo o Brasil</p>
        </header>
        <div className="store__banner">
          <div className="store__content">
            <div className="store__intro">
              <div className="store__brand">
                <img src="/src/assets/logo-jordan.png" alt="Jordan Shoes Logo" />
                <h2 className="store__brand-name">JordanShoes</h2>
              </div>
              <h3 className="store__headline">A melhor loja de Jordan</h3>
              <p className="store__description">
                O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.
              </p>
            </div>
          </div>
        </div>

        <div className="store__highlights">
          <h2 className="store__highlights-title">Os melhores em só lugar</h2>
          <p className="store__highlights-description">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.
          </p>



          <div className="store__products">
            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-green.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 Mid Dutch Green</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 1.199,99</p>
            </div>

            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 High Zoom CMFT Tropical Twist</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 1.049,00</p>
            </div>

            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-1-retro-high-court-purple-w-1-400.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 Retro High Court Purple</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 1.350,00</p>
            </div>

            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 Mid GS "Light Smoke Grey"</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 1.585,00</p>
            </div>

            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-1-mid-bright-citrus-1-1000-1.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 Mid SE Bright Citrus</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 949,99</p>
            </div>

            <div className="store__product">
              <div className="store__product-imageContainer">
                <img src="/src/assets/air-jordan-1-mid-grey-camo-1-1000-1.png" alt="Jordan Shoes Logo" />
              </div>
              <h3 className="store__product-name">Air Jordan 1 Mid Grey Camo</h3>
              <h4 className="store__product-category">Tênis Air Jordan</h4>
              <p className="store__product-price">R$ 999,99</p>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default App;
