import React, { useEffect, useState } from "react";
import "../CardHome.css";
import { useSelector, useDispatch } from 'react-redux'
import { selectById as selectFavsById, postCard, deleteCard } from '../../../../../../store/favSlice.js';
import { AiFillStar } from "react-icons/ai";

function StarButton (props) {
  const data = props.submit;
  const loading = useSelector(state => state.fav.loading);
  const check = useSelector((state) => selectFavsById(state, data.id));
  const dispatch = useDispatch();

  const [ isFav , setIsFav ] = useState(check);

  function handleNew() {
    if(isFav) {
      dispatch(deleteCard([data]));
      setIsFav(false);
    } else {
      dispatch(postCard(data));
      setIsFav(true);
    }
    // alert('Adicionado aos favoritos');
    // navigate('/favoritos');
  }

  useEffect(() => {
    if(loading == 'done') {
      setIsFav(check);
    }
  }, [loading]);

  return (
    <div onClick={handleNew}>
      <div className="star">
        <div className="star-back">
          <AiFillStar size="28" color="#b5b0a8" />
        </div>
        <div className="star-hover" >
          <AiFillStar size="28" color="#f9b116" />
        </div>
        <div className="starred" >
          {isFav ?
            <AiFillStar size="28" color="#f9b116" />
            : <></>}
        </div>
      </div>
    </div>
  );
}


export default StarButton;