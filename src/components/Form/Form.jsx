import {useState} from "react";


const Form = ({handleCreatePlayer}) => {

    //State
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        team: "",
        rating: "",
    });

    //Functions
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreatePlayer(formData);
        setFormData({
            first_name: "",
            last_name: "",
            team: "",
            rating: "",
        });
    };


  return (

    <form onSubmit={handleSubmit}>

        <label htmlFor="first_name">First Name: </label>
        <input id="first_name" name="first_name" type="text" value={formData.first_name} onChange={handleInputChange}></input>

        <label htmlFor="last_name">Last Name: </label>
        <input id="last_name" name="last_name" type="text" value={formData.last_name} onChange={handleInputChange}></input>

        <label htmlFor="team">Team: </label>
        <input id="team" name="team" type="text" value={formData.team} onChange={handleInputChange}></input>

        <label htmlFor="rating">Rating: </label>
        <input id="rating" name="rating" type="number" min="1" max="99" value={formData.rating} onChange={handleInputChange}></input>

        <button type="submit">Submit</button>

    </form>

  )
}

export default Form;