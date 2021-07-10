import feathers from '../assets/img/lock-design.png';
import Button from './Button';
const CarouselItem = (props) => {
    return (
        <div className="card">
            <img src={feathers} alt="feathers" />
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="actions">
                <Button title="preview" />
                <Button title="open in git" />
            </div>
        </div>
    )
}

export default CarouselItem
