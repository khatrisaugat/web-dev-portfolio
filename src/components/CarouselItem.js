import image from '../assets/img/lock-design.png';
import Button from './Button';
const CarouselItem = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="feathers" />
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="actions">
                {props.previewLink!==''? <Button title="preview" url={props.previewLink} />: ''}
                {props.gitLink!==''? <Button title="open in git" url={props.gitLink} />: ''}

                {/* <Button title="open in git" /> */}
            </div>
        </div>
    )
}

export default CarouselItem
