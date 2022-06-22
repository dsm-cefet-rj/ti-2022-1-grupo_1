import img from '../../../../assets/nike1.jpg'
import './ProdImg.css';

export default function ProdImg(props) {
  
    return (
      <div className="prodimgs">
         <img className="shoes" src={props.content.img} />
      </div>
    );
  }
  