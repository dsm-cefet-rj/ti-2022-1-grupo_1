import { useEffect } from 'react';
import ProdImg from "../prodImg/ProdImg";
import ProdInfo from "../prodInfo/ProdInfo";
import { fetchData, selectCardsById } from '../../../../store/dataSlice.js';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ContentInfo.css';


export default function ContentInfo() {
  
  let { id } = useParams();
  const content = useSelector((state) => selectCardsById(state, id));
  const fetch = useSelector(state => state.data.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if(fetch !== 'done') {
      dispatch(fetchData());
  }
  }, [])
  
  return (
    <div className="contentinfo">
      {(fetch == 'done') ? (
        <>
          <ProdImg className="prodimg" content={content}></ProdImg>
          <ProdInfo className="prodinfo" content={content}></ProdInfo>
        </>
        ) : (
        <>
          <p>Carregando...</p>
        </>
        )}
    </div>
  );
}
