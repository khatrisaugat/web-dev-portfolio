import { FaGithub, FaFacebook, FaInstagram, FaFacebookMessenger } from 'react-icons/fa'

function SocialLinks() {
    return (
        <div className="social-media">
            <div className="social-icons">
                <a href='https://github.com/khatrisaugat' target="_blank" className='social-a-link'><FaGithub /></a>
            </div>
            <div className="social-icons">
                <a href='https://www.facebook.com/khatri.saugat55/' target="_blank" className='social-a-link'><FaFacebook /></a>
            </div>
        </div>
    )
}

export default SocialLinks
