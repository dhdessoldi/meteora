import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Carousel.scss';


export default function Banner() {

  return (
    <div className='carousel-container'>

      <Carousel slide={false} interval={null}>
        <Carousel.Item>
          <div
            className="d-block w-100 img-carousel1"
            role='img'
            aria-label="Imagem "
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100 img-carousel2"
            role='img'
            aria-label="Imagem "
          />
          <Carousel.Caption >
            <div className='position-carousel2'>
              <h2 className='title-carousel'>COLEÇÃO ATEMPORAL</h2>
              <p className='text-carousel'>Estilo e qualidade para durar.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100 img-carousel3"
            role='img'
            aria-label="Imagem "
          />
          <Carousel.Caption className='texto-carousel3'>
            <div className='position-carousel3'>
              <h2 className='title-carousel'>COLEÇÃO ATEMPORAL</h2>
              <p className='text-carousel'>Alto impacto visual, baixo impacto ambiental.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
