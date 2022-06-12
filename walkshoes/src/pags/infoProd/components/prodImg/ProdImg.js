import img from '../../../../assets/nike1.jpg'
import './ProdImg.css';

export default function ProdImg() {
  
    return (
      <div className="prodimgs">
         <img className="shoes" src={img} />
      </div>
    );
  }
  