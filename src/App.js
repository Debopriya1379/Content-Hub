import './App.css'
import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import Bucket from './components/Bucket'
import FormModal from './components/FormModal'
import History from './components/History'
import {setEducationCards,setEntertainmentCards} from './features/allCardsSlice'

function App() {

  const prod_base_url = 'http://localhost:3333/buckets';

  const dispatch = useDispatch();
  const [openForm, setOpenform] = useState(false);
  const EducationCards = useSelector(state=>state.allCards.value.EducationCards)
  const EntertainmentCards = useSelector(state=>state.allCards.value.EntertainmentCards)

  const getData = async()=>{
    const response1 = await axios.get(`${prod_base_url}?category=Education`);
    const response2 = await axios.get(`${prod_base_url}?category=Entertainment`);
    dispatch(setEducationCards(response1.data))
    dispatch(setEntertainmentCards(response2.data))
  }

  useEffect(()=>{
    getData();
    // eslint-disable-next-line
  },[openForm]);

  return (
    <Container className="App">
      <header>
        <h1>Convin Assignment</h1>
      </header>
      <nav>
        <button onClick={()=>{setOpenform(true)}}>Add New Card</button>
      </nav>
      <section className='Main'>
        <div className="buckets">
            <Bucket data={EducationCards} Category="Education" />
            <Bucket data={EntertainmentCards} Category="Entertainment" />
        </div>
        <History/>
      </section>
      {openForm && <FormModal setOpenform={setOpenform} />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 100vw;
  min-height : 100vh;
  header {
    width: 100%;
    height: 100px;
    background-color : #3775f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    height: 70px;
    background-color: #3250a1f4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      background-color: #2f9cfb;
      color: white;
      border: none;
      outline: none;
      padding: .5rem;
      cursor: pointer;
      margin-right: 1rem;
    }
  }
  .Main {
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 3fr;
    padding: 1rem 0;
    .buckets {
      /* background-color: #3775f0; */
      width: 100%;
      display:flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem auto;
    }
  }
  @media only screen and (max-width: 600px){
    .buckets {
      width: 70%;
    }
    .Main {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (max-width: 450px){
    .buckets {
      width: 90%;
    }
  }
  @media only screen and (max-width: 330px){
    .buckets {
      width: 100%;
    }
  }
`
