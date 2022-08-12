import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {removeSelectedCard} from '../features/selectedCardSlice'
import {setToHistory} from '../features/historySlice'

export default function CardModal({setOpenCardModal}) {

    const dispatch = useDispatch();
    const currentCard = useSelector(state=>state.selectedCard.value);

    const handleClick = ()=>{
        dispatch(removeSelectedCard());
        setOpenCardModal(false);
    }

    const addToHistory =(currentCard)=>{
        // console.log('start'+currentCard.name)
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dt= (date+" at "+time)
        dispatch(setToHistory({...currentCard,dateAndTime : dt }))
    }

    return (
        <Container>
            <div className="card_modal">
                <h3>{currentCard.name}</h3>
            <button onClick={handleClick}>Close</button>
                <div className="player">
                    <ReactPlayer 
                        width={'400px'} 
                        height={'300px'} 
                        url={currentCard.src} 
                        playing={true} 
                        onStart={()=>{addToHistory(currentCard)}}
                    />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* backdrop-filter: blur(20px); */
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .card_modal {
        width: 500px;
        height: 500px;
        border-radius: 12px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 25px;
        button {
            width: 100px;
            padding: .3rem;
            border: none;
            background-color: red;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
            cursor: pointer;
        }
        .player {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`
