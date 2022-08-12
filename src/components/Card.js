import axios from 'axios'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {setSelectedCard} from '../features/selectedCardSlice'
import {deleteEduCard,deleteEntCard} from '../features/allCardsSlice'

export default function Card({cardData,setOpenCardModal}) {

  const prod_base_url = 'http://localhost:3333/buckets';

  const dispatch = useDispatch();

  const handleClick = (card)=>{
    dispatch(setSelectedCard(card))
    setOpenCardModal(true)
  }

  const DeleteCard = async(card)=>{
    await axios.delete(`${prod_base_url}/${card.id}`)
    if(card.category === "Education"){
      dispatch(deleteEduCard({id : card.id}))
    }else{
      dispatch(deleteEntCard({id : card.id}))
    }
  }

  return (
    <Container>
        <h3>{cardData.name}</h3>
        <button id='view_button' onClick={()=>{handleClick(cardData)}}>View</button>
        <button onClick={()=>{DeleteCard(cardData)}}>Delete</button>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  padding: 0.5rem;
  button,a {
      width: 80%;
      padding: .3rem;
      border: none;
      background-color: red;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
      cursor: pointer;
  }
  #view_button {
    background-color: #21c521;
  }
  /* .card_header{
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    button {
      padding: .3rem;
      border: none;
      background-color: red;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
      cursor: pointer;
    }
  }
  iframe {
    width: 250px;
    height: 130px;
    border: none;
  } */
`