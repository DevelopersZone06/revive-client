import { useState } from "react";
import { Link } from "react-router-dom";


const BMIServices = () => {
    const [BMI, setBMI] = useState('');
    const [text, setText] = useState('');
  
    const handleBMI = (e) => {
      e.preventDefault();
  
      const feet = parseFloat(e.target.feet.value);
      const inches = parseFloat(e.target.inches.value);
      const weight = parseFloat(e.target.weight.value);
  
      const convertToInches = feet * 12 + inches;
      const convertToMeter = convertToInches * 0.0254;
  
      const calculatedBMI = (weight / (convertToMeter * convertToMeter)).toFixed(2);
      setBMI(calculatedBMI);
  
      if (calculatedBMI < 18.5) {
        setText('underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        setText('normal');
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        setText('overweight');
      } else if (calculatedBMI >= 30 && calculatedBMI < 34.9) {
        setText('obesity Class 1');
      } else if (calculatedBMI >= 35 && calculatedBMI < 39.9) {
        setText('obesity Class 2');
      } else {
        setText('obesity Class 3');
      }
    };

    return (
        <div>
            <h1>Hello</h1>
            <form action="" onSubmit={handleBMI}>
            <input type="number" placeholder="feet" name='feet' />
            <input type="number"  placeholder="inches" name="inches"/>
            <br />
            <input type="text"  id="" placeholder="weight"  name='weight' />
            <input type="submit" name="" id="" placeholder="Submit" />
            </form>
              <h2>Your BMI is {BMI}</h2>
              <Link to={'https://health1.tiiny.site/'}>Pdf</Link>
             
      
      
    </div>
        
    );
};

export default BMIServices;