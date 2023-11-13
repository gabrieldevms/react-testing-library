import image404 from "/404.gif"
import './not-found.css';

function NotFound() {
  return (
    <div>
      <h2>
        {`Page requested not found`}
      </h2>

      <div className="not-found-container">
        <div>
          <p>
            This page was not found!
          </p>
          <p>
            But don't worry, this has nothing to do with Team Rocket!
          </p>

        </div>
        <img
          className="not-found-image"
          src={image404}
          alt="Clefairy pushing buttons randomly with text I have no idea what i'm doing"
        />
      </div>
    </div>
  );
}

export default NotFound;
