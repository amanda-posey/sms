import 'bootstrap/dist/css/bootstrap.min.css';
import Feature from './images/lauren_feature.jpeg';
import Placeholder from './images/placeholder.png';
import './App.css';

function App() {
  return (
    <>
    <hr/>
    <div class="card mb-3 feature mx-auto">
  <div class="row g-0">
    <div class="col-md-6">
      <img src={Feature} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Feature Placeholder</h5>
        <p class="card-text">This would ideally be a brief rundown of Lauren, and how Silver Mist Stables came to be. We'll have other places to discuss services and even prices if you want, so this should be where you tell us all where you came from and why you love Saddlebreds.</p>
      </div>
    </div>
  </div>
</div>

<hr/>

<div class='container justify-content-center'>
  <div class='row justify-content-center'>
    <div class='col'>
    <div class="card">
      <a href='/services'>
  <img src={Placeholder} class="card-img-top" alt="Placeholder for lessons."/> </a>
  <div class="card-body">
  <h5 class="card-title">Lessons</h5>
    <p class="card-text">We don't train riders - we train equestrians.</p>
    <p class="card-text">Each lesson begins and ends with grooming and caring for your lesson horse. Each student will progress at the rate that matches their comfort and skill level.</p>
  </div>
</div>
    </div>
    <div class='col'>
    <div class="card">
      <a href='/services'>
  <img src={Placeholder} class="card-img-top" alt="Placeholder for boarding."/> </a>
  <div class="card-body">
  <h5 class="card-title">Boarding</h5>
    <p class="card-text">Keep your horses on a family farm, no matter where your family lives.</p>
    <p class="card-text">A paragraph about what Silver Mist offers to boarders. This will link to the Services page, where we can outline prices if you want.</p>
  </div>
</div>
    </div>
    <div class='col'>
    <div class="card">
      <a href='/services'>
  <img src={Placeholder} class="card-img-top" alt="..."/> </a>
  <div class="card-body">
  <h5 class="card-title">Shows</h5>
    <p class="card-text">We love saddlebreds, and saddlebreds were born to show.</p>
    <p class="card-text">From weekly lessons to show intensives, we are dedicated to building a strong foundations for all of our students.</p>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  );
}
export default App;
