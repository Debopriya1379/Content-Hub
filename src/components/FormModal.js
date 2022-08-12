import {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

export default function FormModal({setOpenform}) {

    const prod_base_url = 'http://localhost:3333/buckets';

    const [bucketName, setbucketName] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardUrl, setCardUrl] = useState("");

    const addNewCard = async()=>{
        try{
            if(bucketName !=="" && cardName !==" " && cardUrl !==""){
                await axios.post(`${prod_base_url}`,
                    {
                        id : uuidv4(),
                        category : bucketName,
                        name : cardName,
                        src : cardUrl
                    }
                )
                setOpenform(false);
            }
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <Container>
            <div className="form_modal_container">
                <div className="modal_header">
                    <p>Add New Card</p>
                    <button onClick={()=>{setOpenform(false)}}>Cancel</button>
                </div>
                <div className="modal_form">
                    <form className='bucket_options'>
                        <input type="radio" id="Entertainment" name="Bucket" value="Entertainment" onChange={(e)=>{setbucketName(e.target.value)}}/>
                        <label htmlFor="Entertainment">Entertainment</label><br/>
                        <input type="radio" id="Education" name="Bucket" value="Education" onChange={(e)=>{setbucketName(e.target.value)}} />
                        <label htmlFor="Education">Education</label><br/>
                    </form>
                    <input type="text" placeholder='Card name' onChange={(e)=>{setCardName(e.target.value)}} />
                    <input type="text" placeholder='Valid iframe url' onChange={(e)=>{setCardUrl(e.target.value)}} />
                    <button onClick={addNewCard}>Add</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(20px);
    /* background-color: rgba(200, 200, 200); */
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .form_modal_container {
        width: 30%;
        height: 60%;
        border-radius: 12px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 25px;
        .modal_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
                font-size: 20px;
            }
            button {
                padding: .4rem;
                border: none;
                background-color: red;
                color: white;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
                cursor: pointer;
            }
        }
        .modal_form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            input {
                width: 80%;
                height: 30px;
                padding: 0 1rem;
            }
            button {
                width: 100px;
                height: 30px;
                border: none;
                color: white;
                background-color: #3ec73e;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
                cursor: pointer;
            }
            .bucket_options {
                display: flex;
                align-items: center;
                gap: 1rem;
                input {
                    width: 30px;
                    height: 25px;
                }
            }
        }
    }
    @media only screen and (max-width: 700px){
        .form_modal_container {
            width: 50%;
            height: 60%;
        }
    }
    @media only screen and (max-width: 550px){
        .form_modal_container {
            width: 60%;
            height: 60%;
        }
    }
    @media only screen and (max-width: 450px){
        .form_modal_container {
            width: 80%;
            height: 60%;
        }
    }
`
