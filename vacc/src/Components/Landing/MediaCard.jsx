import './MediaCard.css'
import defaultImg from '../../assets/default.png'

export default function (props) {
    return (
        <a className = "link" href={props.link} target="_blank">
            <div className='card'>
                <img src={props.img || defaultImg} alt="thumbnail" />
                <h1 className='source'>{props.date} | {props.src}</h1>
                <h1 className='title'>{props.title}</h1>
            </div>
        </a>

    )
}