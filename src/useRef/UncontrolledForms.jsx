import { useRef } from "react";

const UncontrolledForms = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const dobRef = useRef();

  const maleRef = useRef();
  const femaleRef = useRef();
  const othersRef = useRef();

  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();

  const countryRef = useRef();
  const feedbackRef = useRef();
  const photoRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault()
    //!Radio
    let gender = ""
    if(maleRef.current.checked){
      gender="Male"
    }else if(femaleRef.current.checked){
      gender="Female"
    }else if(othersRef.current.checked){
      gender="Other"
    }
    //!CHECKBOX
    let skills = []
    if(htmlRef.current.checked){
      skills.push("HTML")
    }
    if(cssRef.current.checked){
      skills.push("CSS")
    }
    if(jsRef.current.checked){
      skills.push("JS")
    }
    //!FILE
    // let photo = photoRef.current.files[0].name
    let formData = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      phone:phoneRef.current.value,
      dob:dobRef.current.value,
      gender,
      skills,
      country:countryRef.current.value,
      feedback:feedbackRef.current.value,
      photo
    }
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form🔥</legend>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
        <br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
        <br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" ref={phoneRef} />
        <br /><br />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" ref={dobRef} />
        <br /><br />

        <label>Gender:</label>

        <input type="radio" name="gender" value="male" id="male" ref={maleRef} />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" value="female" id="female" ref={femaleRef} />
        <label htmlFor="female">Female</label>

        <input type="radio" name="gender" value="others" id="others" ref={othersRef} />
        <label htmlFor="others">Others</label>
        <br /><br />

        <label>Skills:</label>

        <input type="checkbox" value="HTML" id="html" ref={htmlRef} />
        <label htmlFor="html">HTML</label>

        <input type="checkbox" value="CSS" id="css" ref={cssRef} />
        <label htmlFor="css">CSS</label>

        <input type="checkbox" value="JavaScript" id="js" ref={jsRef} />
        <label htmlFor="js">JavaScript</label>
        <br /><br />

        <label htmlFor="country">Country:</label>
        <select id="country" ref={countryRef}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>
        <br /><br />

        <label htmlFor="feedback">Feedback:</label>
        <textarea rows="3" id="feedback" ref={feedbackRef}></textarea>
        <br /><br />

        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" ref={photoRef} />
        <br /><br />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default UncontrolledForms;
