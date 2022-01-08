import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Dog(props) {
    const { name, age, imgSrc } = props;

    return (
        <div className="card" style={{ width: "18rem" }
        }>
            <img src={imgSrc} className="card-img-top" alt={name} style={{ width: '76%' }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Age: {age}</p>
            </div>
            <div className="card-body">

                <Link className="card-link" to="/">Home</Link>
            </div>
        </div >
    )
}
export default Dog;