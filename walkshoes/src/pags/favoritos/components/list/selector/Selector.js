// [React]
import React, { useState, useEffect } from 'react';

// [Redux]
import { useDispatch } from 'react-redux';
import {
    switchSelectMany,
    deleteCard,
} from '../../../../../store/favSlice.js';

// [CSS]
import '../List.css'

const Selector = (props) => {

    // Redux
    const data = props.data;                 // var - todos os itens no slice
    const dispatch = useDispatch();                             // func - pra mandar os dispatches

    // States
    const [ select, setSelect ] = useState(false);              // var - checkbox 'todos'
    const [ dselect, setDelete ] = useState(false);      // var - checkbox 'todos'

    // Hooks
        // Hook que seleciona os itens do favData
        useEffect(() => {
            dispatch(switchSelectMany(data.map((item) => ({id: item.id, selected: select}))));
        }, [select]);

        // Hook que habilita o botao de excluir
        useEffect(() => {
            if(hasSelected()) setDelete(true);
            else setDelete(false);
        }, [data]);

    // Funcoes
        // Funcao que verifica se existe card selecionado (tb pode retornar o card)
        function hasSelected (t = '') {
            const array = data.filter((item) => {
                return item.selected == true
            });

            switch (t) {
                case 'get' :
                    return array;

                default:
                    return array.length;
            }
        }

        // Funcao handle que seta o state do checkbox
        function h_select () {
            setSelect(!select);
        }

        // Funcao handle que deleta os itens selecionados e seta o state do checkbox
        function h_dselect() {
            hasSelected('get').map((item) => {
                dispatch(deleteCard(item))
            })
            
            setSelect(false);
        }

    // HTML
    return (
    <>
        <div className="productLabel f1">
            <div className="stack mid checkw">
                <input 
                    type="checkbox" 
                    name="select-all"
                    checked={select}
                    onChange={h_select}
                />
                <label htmlFor="select-all" className='f1'>Todos</label>
            </div>
            <button className="delete-select" onClick={h_dselect} disabled={!dselect}>Excluir</button>
        </div>
    </>
    );
}

export default Selector