import { useForm } from 'react-hook-form';
import './App.css';
import FruitContainersParent from "./components/FruitContaintersParent/FruitContainersParent";
import Button from "./components/Button/Button";


function App() {
    const { register, handleSubmit, watch } = useForm();
    //This is necessary to make sure the Submit button is disabled if Term and Conditions have not been clicked.
    const watchTAC = watch('termsAndConditions');

    function onFormSubmit(data) {
        console.log(data);
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
                            value="afternoon"
                            {...register("deliveryTime")}
                        />
                        Overdag
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="evening"
                            {...register("deliveryTime")}
                        />
                        's Avonds
                    </label>
                    <label htmlFor="messageInput" className="messageLabel">Opmerking
                        <textarea
                            id="messageInput"
                            cols="20"
                            rows="5"
                            {...register("message")}
                        ></textarea>
                    </label>
                    <label className="tACLabel">
                        <input
                            type="checkbox"
                            {...register("termsAndConditions")}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Button
                        buttonType="submit"
                        onSubmit={handleSubmit}
                        isDisabled={watchTAC === false}
                    >Verzenden</Button>


                </form>

            </article>
        </>
    );
}

export default App;
