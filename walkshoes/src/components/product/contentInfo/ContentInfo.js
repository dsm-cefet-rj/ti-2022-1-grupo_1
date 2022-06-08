import ProdImg from "../prodImg/ProdImg";
import ProdInfo from "../prodInfo/ProdInfo";
import './ContentInfo.css';


export default function ContentInfo() {
  
  return (
    <div className="contentinfo">
      <ProdImg className="prodimg"></ProdImg>
      <ProdInfo className="prodinfo"></ProdInfo>
    </div>
  );
}
