import { FaGithub, FaFacebook, FaInstagram, FaFacebookMessenger } from 'react-icons/fa'

function SocialLinks() {
    return (
        <div className="social-media">
            <div className="social-icons">
                <FaGithub />
            </div>
            <div className="social-icons">
                <FaFacebook />
            </div>
            <div className="social-icons">
                <FaInstagram />
            </div>
            <div className="social-icons">
                <FaFacebookMessenger />
            </div>
        </div>
    )
}

export default SocialLinks
