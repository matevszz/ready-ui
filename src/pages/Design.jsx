import './Design.css';
import Navbar from '../Components/Navbar';

//component buttona do kopiowania
const copyButton = (onClick) => (
  <buttton className="copyBtn" onClick={onClick}>Copy</buttton>
)

//funkcja do kopiowania stylu danego buttona
function copyToClipboardButton (cssParam, type) {
  navigator.clipboard.writeText(cssParam).then(alert(`You just copied ${type} design!`));
}


//classic button design
const classicButtonCopy = 'test';

function Design () {
  
  return (
    <>
        <Navbar />
        <div className="design-app">
          <div className="buttons">
            <div className="classic-button">
              <p>✅ classic button</p>
              <button className='classic-buttonBtn'>Button</button>
              {copyButton(() => {copyToClipboardButton(classicButtonCopy, 'button')})}
            </div>
            <div className="retro-button">
              <p>📺 retro button</p>
              <button className='retro-buttonBtn'>Button</button>
              {copyButton(() => {copyToClipboardButton(classicButtonCopy, 'button')})}
            </div>
          </div>
        </div>
    </>
  )
}

export default Design
