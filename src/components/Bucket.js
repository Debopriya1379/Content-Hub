import {useState} from 'react'
import styled from 'styled-components'
import Card from './Card'
import CardModal from './CardModal'

export default function Bucket({data,Category}) {

  const [openCardModal, setOpenCardModal] = useState(false);

  return (
    <Container>
      <div className='bucket_header'>
        <h4>{Category}</h4>
      </div>
      <div className="bucket_cards">
        {
          data.map((card,id)=>{
            return(
              <Card key={id} cardData={card} setOpenCardModal={setOpenCardModal} />
            )
          })
        }
      </div>
      {openCardModal && <CardModal setOpenCardModal={setOpenCardModal} />}
    </Container>
  )
}

const Container = styled.div`
    /* background-color: #2f9cfb; */
    width: 90%;
    padding: 1rem 0;
    margin: 0 auto;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    .bucket_header {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bucket_cards {
      /* background-color: #2f9cfb; */
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
    .bucket_footer{
      width: 80%;
      display: flex;
      justify-content: flex-end;
      button {
        background-color: #2f9cfb;
        color: white;
        border: none;
        outline: none;
        padding: .5rem;
        cursor: pointer;
      }
    }
    @media only screen and (max-width: 1200px){
      .bucket_cards {
        grid-template-columns: 1fr;
      }
  }
`
