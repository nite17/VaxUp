import './ThreeSteps.css'
import ThreeStepsImg from '../../assets/ThreeStepsImg.jpg'

export default function ThreeSteps() {
    return (
        <div className='ThreeSteps'>
            <div className='content'>
                <h1>Vaccines can help you stay healthy. Get yours now</h1>
                <ol>
                    <li>Enter your ZIP Code</li>
                    <li>Choose your nearest hospital</li>
                    <li>Call or visit their website to check vaccine availability and make an appointment to get a vaccine</li>
                </ol>
                <div>
                    <h2>Enter 6-digit ZIP Code</h2>
                    <form className='ZipCode' action="/">
                        <input type="text" id='Zip' />
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <img src={ThreeStepsImg} />
        </div>
    )
}