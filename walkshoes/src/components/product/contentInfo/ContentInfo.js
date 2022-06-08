import ProdImg from "../prodImg/ProdImg";
import ProdInfo from "../prodInfo/ProdInfo";
import './ContentInfo.css';


export default function ContentInfo(props) {
  
  return (
    <div className="contentinfo">
      <ProdImg className="prodimg" card={props.cards}></ProdImg>
      <ProdInfo className="prodinfo"></ProdInfo>
    </div>
  );
}
