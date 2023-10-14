import "./style.css";
import myimg from './Saranya Gudluri.jpg';
import {useRef} from "react";
export function Home(){
    const home=useRef(null);
    const about=useRef(null);
    const skills=useRef(null);
    const projects=useRef(null);
    const contact=useRef(null);

   const scrollToSection=(elementRef)=>{
    window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth'
    })
   }
     
    return(

        <div class="App">
            <div class="hero">
                <ul>
                    <li onClick={()=>scrollToSection(home)} class="link">Home</li>
                    <li onClick={()=>scrollToSection(about)} class="link">About me</li>
                    <li onClick={()=>scrollToSection(skills)} class="link">Skills</li>
                    <li onClick={()=>scrollToSection(projects)} class="link">Projects</li>
                    <li onClick={()=>scrollToSection(contact)} class="link">Contact details</li>
                </ul>
            </div>
            <div ref={home} class="home">
                  <h3 class="heading">Home</h3>
                   <table>
                    <tr>
                    <td><h3 class="i1">Hello everyone</h3>
                    <h3 class="i1">I am Saranya Gudluri</h3>
                    <h3 class="i1">(Student/Undergraduate)</h3>
                    <h3 class="i1"><a href="https://drive.google.com/file/d/1ij39aUe0RHKV38DZKPOVQ5DP55aKM-D_/view?usp=sharing" >My resume</a></h3>
                    <h3 class="i1">Detail-oriented and motivated Computer Science Student eager to contribute technical skills and collaborate
as an Intern with a dynamic team. Eager to learn from experienced professionals, contribute to impactful
projects, and gain hands-on experience in a collaborative environment.</h3></td>
                    <td><img src={myimg} alt="My img"></img></td>
                    </tr>
                   </table>

                  </div>
            <div ref={about}class="about">
                    <h3 className="heading">About me</h3>
                    <h3>I am Saranya Gudluri. I am a 3rd year undergraduate at VIT-AP University.<br></br>
          Date of Birth	: 02-05-2004<br></br> Languages Known	: English, Telugu, Hindi.<br></br>
          Leisure Interests:
            Dancing,
          Cooking
        </h3>
            </div>
            <div ref={skills} class="skills">
                 <h3 className="heading">My Technical skills</h3>
                 <h4>➢ Programming languages: Java, Python, MySQL, R(Basics).</h4>
                 <h4>➢ Machine Learning and Deep Learning Tasks</h4>
                 <h4>➢ Web development:Html,CSS,JavaScript</h4>
                 <h4>➢ MS Office (Power Point, Excel and Word)</h4>
                <h4>➢ Database: Oracle</h4>
                <h3 className="heading">My Soft skills</h3>
                <h4>➢ Analytical skills</h4>
                <h4>➢ Communication Skills </h4>
            </div>
            <div ref={projects} class="projects">
                <h3 class="heading">Projects</h3>
                <h4>➢ Enhancing Diabetes Prediction with Data Preprocessing and Various Machine Learning Algorithms</h4>
                <h4>➢ Audio-Visual Image captioning using Deep learning</h4>
                <h4>➢ Identifying Patterns and Trends in Campus Placement Data using Machine Learning</h4>
               <h4>➢Sun tracking solar system with dual axis</h4>
            </div>
            <div ref={contact} class="contact">
                <h3 class="heading">Contact details</h3>
                <h4>Email-id: saranyagudluri254@gmail.com</h4>
                <h4>Contact Number: 9392484689</h4>
                <h4> <a href="https://github.com/SaranyaGudluri">Github Link</a></h4>
            </div>
        </div>
    )
}