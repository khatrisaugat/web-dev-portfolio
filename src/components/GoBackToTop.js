import { FaArrowAltCircleUp } from 'react-icons/fa'

function GoBackToTop() {
    const handleClick = () => {
        document.getElementById('root').scrollIntoView();
    }
    return (
        <div className="goBackToTop" onClick={handleClick}>
            <FaArrowAltCircleUp />
        </div>
    )
}

export default GoBackToTop
