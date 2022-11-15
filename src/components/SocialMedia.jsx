import { BsLinkedin, BsGithub } from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/jorge-luis-martinez-mendoza/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/JorgeMtz" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
