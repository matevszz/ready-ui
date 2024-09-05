import './Design.css';
import Navbar from '../Components/Navbar';

const copyButton = (onClick) => (
  <buttton className="copyBtn" onClick={onClick}>Copy</buttton>
)

function copyToClipboard (cssParam, type) {
  navigator.clipboard.writeText(cssParam).then(alert(`You just copied ${type} design!`));
}

const classicButtonDesign = 'test';

function Design () {
  return (
    <>
        <Navbar />
        <div className="design-app">
          <div className="buttons">
            <div className="classic-button">
              <p>✅ classic button</p>
              <button className='classic-buttonBtn'>Button</button>
              {copyButton(() => {copyToClipboard(classicButtonDesign, 'button')})}
            </div>
          </div>
        </div>
    </>
  )
}

export default Design
