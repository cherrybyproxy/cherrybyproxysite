import './index.css'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/About" element = {<About/>}/>
          <Route path = "/Experience" element = {<Experience/>}/>
          <Route path = "/Projects" element = {<Projects/>}/>
          <Route path = "/Beyond" element = {<Beyond/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

// Well I was there on the day<br  />
//           They sold the cause for the queen<br  />
//           And when the lights all went out<br  />
//           We watched our lives on the screen<br  />
//           I hate the ending myself<br  />
//           But it started with an alright scene<br  />
//           It was the roar of the crowd<br  />
//           That gave me heartache to sing<br  />
//           It was a lie when they smiled<br  />
//           And said, you won't feel a thing<br  />
//           And as we ran from the cops<br  />
//           We laughed so hard it would sting<br  />
//           Yeah yeah, oh<br  />
//           If I'm so wrong (so wrong, so wrong)<br  />
//           How can you listen all night long? (night long, night long)<br  />
//           Now will it matter after I'm gone?<br  />
//           Because you never learn a goddamn thing<br  />
//           You're just a sad song with nothing to say<br  />
//           About a life long wait for a hospital stay<br  />
//           And if you think that I'm wrong<br  />
//           This never meant nothing to ya<br  />
//           I spent my high school career<br  />
//           Spit on and shoved to agree<br  />
//           So I could watch all my heroes<br  />
//           Sell a car on TV<br  />
//           Bring out the old guillotine<br  />
//           We'll show 'em what we all mean<br  />
//           Yeah yeah, oh<br  />
//           If I'm so wrong (so wrong, so wrong)<br  />
//           How can you listen all night long? (night long, night long) <br  />
//           Now will it matter long after I'm gone? <br  />
//           Because you never learn a goddamn thing <br  />
//           You're just a sad song with nothing to say <br  />
//           About a life long wait for a hospital stay <br  />
//           And if you think that I'm wrong <br  />
//           This never meant nothing to ya <br  />
//           So go, go away, just go, run away <br  />
//           But where did you run to, and where did you hide? <br  />
//           Go find another way, price you pay <br  />
//           Whoa, whoa, whoa, whoa, whoa, whoa <br  />
//           You're just a sad song with nothing to say <br  />
//           About a life long wait for a hospital stay <br  />
//           And if you think that I'm wrong <br  />
//           This never meant nothing to ya <br  />
//           You're just a sad song with nothing to say <br  />
//           About a life long wait for a hospital stay <br  />
//           And if you think that I'm wrong <br  />
//           This never meant nothing to ya <br  />
//           At all, at all, at all, at all
