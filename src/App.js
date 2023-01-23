import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import alexaImg from "./images/alexa.png";
import cortanaImg from "./images/cortana.png";
import siriImg from "./images/siri.png";


function App() {
  return (
   
    <div> 
      <section class="hero is-primary">
       <div class="hero-body">
         <p class="title">
           Al Voice Assistants
         </p>
        </div>
     </section>
      <div class="columns">
        <div class="column">
          <ProfileCard title="Alexa" handler="@alexa99" imgSrc={alexaImg} />
        </div>
        <div class="column">
          <ProfileCard title="Cortana" handler="@cortana96" imgSrc={cortanaImg} />
        </div>
        <div class="column">
          <ProfileCard title="Siri" handler="@sir996" imgSrc={siriImg} />
        </div>

      </div>
    </div>
  )
};

export default App;
