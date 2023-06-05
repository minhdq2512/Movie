import { Button, Container } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import '../App';
function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFavoriteGenreChange = (event) => {
    setFavoriteGenre(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Container className="contact-container">
      <div className="contact-form">
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="contact-form--select">
            <label htmlFor="favorite-genre">Favorite film genre:</label>
            <select
              id="favorite-genre"
              value={favoriteGenre}
              onChange={handleFavoriteGenreChange}
            >
              <option value="">--Please choose an option--</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
            </select>
          </div>

          <div className="contact-form--textarea">
            <label htmlFor="message">
              <EditIcon fontSize="small" /> Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ my: 2 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
