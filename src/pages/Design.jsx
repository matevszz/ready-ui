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
const classicButtonCopy = `
    font-size: 24px;
    padding: 24px 48px;
    border-radius: 50px;
    border: 1px solid #212121;
    cursor: pointer;
    font-weight: 500;
    background: rgba(0, 0, 0, .05);
    color: #212121;
    transition: all .3s;
    
    !!! while hover !!!
    
    background: #212121;
    color: white;`;

const retroButtonCopy = `
    font-size: 24px;
    padding: 24px 48px;
    background: rgba(0, 0, 0, .05);
    border: 1px solid #212121;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 5px 5px 0px black;
    font-weight: 400;
    transition: all .1s;
    
    !!! while hover !!!
    
    box-shadow: 10px 10px 0px black;
    transform: translateY(-5px);
    font-weight: 600;
    border: 2px solid #212121;`

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
              {copyButton(() => {copyToClipboardButton(retroButtonCopy, 'button')})}
            </div>
          </div>
        </div>
    </>
  )
}

export default Design
