// import {useEffect} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/exports'
import HistoryCard from './HistoryCard';

export default function History() {

    const History = useSelector(state=>state.history.value);

    return (
        <Container>
            <h3>History</h3>
            <div className="history_cards">
                {
                    History.map((card,id)=>{
                        return(
                            <HistoryCard key={id} cardData={card}/>
                        )
                    })
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: .5rem;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .history_cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
`
