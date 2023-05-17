import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import FruitContainersParent from "./components/FruitContaintersParent/FruitContainersParent";
import Button from "./components/Button/Button";


function App() {
    const { register, handleSubmit } = useForm();

    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        age:0,
        zipcode:'',
        deliveryFrequency:'weekly',
        deliveryTime:'day',
        message:'',
        termsAndConditions: false
    });

    function onFormSubmit(data) {
        console.log(data);
    }

    const changeForm = e => {
        setFormValues( formValues =>{
            return{ ...formValues,[e.target.name]: e.target.value}
        })
        console.log(formValues)
    }

    return (
        <>
            <article className="fruitSelector">
                <h1>Fruitmand bezorgservice</h1>
                <FruitContainersParent/>
            </article>
            <article className="formContainer">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="firstNameInput">Voornaam</label>
                    <input
                        type="text"
                        id="firstNameInput"
                        {...register("firstName")}
                    />
                    <label htmlFor="lastNameInput">Achternaam</label>
                    <input
                        type="text"
                        id="lastNameInput"
                        {...register("lastName")}
                    />
                    <label htmlFor="ageInput">Leeftijd</label>
                    <input
                        type="text"
                        id="ageInput"
                        {...register("age")}
                    />
                    <label htmlFor="firstNameInput">Postcode</label>
                    <input
                        type="text"
                        id="zipCodeInput"
                        {...register("zipCode")}
                    />
                    <label htmlFor="deliveryFrequencyInput">Bezorgfrequentie
                        <select
                            id="deliveryFrequencyInput"
                            {...register("deliveryFrequency")}>
                            <option value="weekly">Iedere week</option>
                            <option value="biweekly">Om de week</option>
                            <option value="monthly">Iedere maand</option>
                        </select>
                    </label>
                    <label>
                        <input
                            type="radio"
                            {...register("deliveryTime")}
                        />
                        Overdag
                    </label>
                    <label>
                        <input
                            type="radio"
                            {...register("deliveryTime")}
                        />
                        's Avonds
                    </label>
                    <label htmlFor="messageInput">Opmerking
                        <textarea
                            id="messageInput"
                            cols="60"
                            rows="30"
                            {...register("message")}
                        ></textarea>
                    </label>
                    <input
                        type="checkbox"
                        {...register("termsAndConditions")}
                    />
                    Ik ga akkoord met de voorwaarden
                    <Button
                        buttonType="submit"
                        onClick={handleSubmit}
                        buttonDisabled={formValues.termsAndConditions === false}
                    >Verzenden</Button>


                </form>

            </article>
        </>
    );
}

export default App;
