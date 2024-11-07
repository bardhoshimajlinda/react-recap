import { useState } from "react";

const FormExample = () => {
  // const [inputs, setInputs] = useState({});

  const [inputs, setInputs] = useState({
    username: "",
    age: "",
    bio: "",
    isStudent: false,
    gender: "",
    hobby: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log(event);
    setInputs((values) => ({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Fill Out Your Information</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Enter name:
            <input
              className="form-input"
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Enter age:
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleChange}
            />
          </label>

          <label>
            Bio:
            <textarea
              name="bio"
              value={inputs.bio}
              onChange={handleChange}
            ></textarea>
          </label>

          <label className="isStudent">
            Are you a student?
            <input
              type="checkbox"
              name="isStudent"
              checked={inputs.isStudent}
              onChange={handleChange}
            />
          </label>

          <fieldset>
            <legend>Gender</legend>
            <input
              className="form-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              checked={inputs.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <br />
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              checked={inputs.gender === "male"}
              onChange={handleChange}
            />

            <label htmlFor="male">Male</label>
            <br />
            <input
              type="radio"
              id="prefer-not-to-say"
              value="prefer-not-to-say"
              name="gender"
              checked={inputs.gender === "prefer-not-to-say"}
              onChange={handleChange}
            />
            <label htmlFor="prefer-not-to-say">Prefer not to say</label>
          </fieldset>

          <label>
            Select your hobby:
            <select name="hobby" value={inputs.hobby} onChange={handleChange}>
              <option value="">--Select a hobby--</option>
              <option value="reading">Reading</option>
              <option value="sports">Sports</option>
              <option value="traveling">Traveling</option>
              <option value="gaming">Gaming</option>
              <option value="cooking">Cooking</option>
            </select>
          </label>

          <button className="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormExample;
