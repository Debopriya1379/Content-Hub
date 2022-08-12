import React from 'react'
import styled from 'styled-components'

export default function HistoryCard({cardData}) {
  return (
    <Container>
        <h4>{cardData.name}</h4>
        <p>{cardData.dateAndTime}</p>
    </Container>
  )
}

const Container = styled.div`
    border: 1px solid black;
    max-width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    padding: 0.2rem;
`
