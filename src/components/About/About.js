import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { photo, name, role, description, social } = about;

  // Your Google Drive resume link
  const resumeLink = "https://drive.google.com/file/d/1XjL08Bv6cwTazShL-WYaI3_mmZsqX2UA/view";

  return (
    <div className='about center'>
      {photo && (
        <img height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description}</p>

      <div className='about__contact center'>
        {resumeLink && (
          <a href={resumeLink} aria-label={`${name}'s Resume`} target="_blank" rel="noopener noreferrer" className='link link--icon'>
            <TextSnippetIcon fontSize='large' />
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label={`${name}'s GitHub`}
                target="_blank" 
                rel="noopener noreferrer"
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label={`${name}'s LinkedIn`}
                target="_blank" 
                rel="noopener noreferrer"
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default About;
