import Main from './Main'
import '../styles.css'
import '../styles.scss'
import Questions from './Questions'
import Footer from './Footer'
import { createContext, useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { Helmet } from 'react-helmet';


const languages = [
  {
  code : 'en',
  name : 'English',
  country_code : 'gb',
  img :"https://flagcdn.com/gb.svg"
  },
  {
    code : 'es',
    name : 'Español',
    country_code : 'ar',
    img :"https://flagcdn.com/ar.svg"
  },
  {
    code : 'de',
    name : 'Deutsch',
    country_code : 'de',
    img :"https://flagcdn.com/de.svg"
  },
]

document.title = 'Combinados';


export const ThemeContext = createContext(null)

function Home() {

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const { t } = useTranslation();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (

    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <>
    <Helmet>
      <html lang={currentLanguageCode} />
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />
      <meta name="keywords" content={t('seo.keywords')} />
      <meta name="author" content="Valentina Latyn" />
    </Helmet>

    <div className='main-app' id={theme}>

    <div className = 'main-div'>
      <div className='nav-div'>
      <Link to='/' className='link'>
        <h1 className='logo'><span>Combina</span><span className='dos'>2</span></h1>
      </Link>

        <div className='settings'>
        <button><i onClick={toggleTheme} className="fa-solid fa-circle-half-stroke"></i></button>

        <div className="dropdown">
          <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-globe"></i>
          </button>

          <ul className="dropdown-menu">

            <li><span className='dropdown-item-text'>{t('language')}</span></li>
            
            {languages.map(({code, name, country_code, img}) => (
              <li key={country_code}>
                <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                  <span className='flag-span' style={{opacity: code === currentLanguageCode ? 0.5 : 1 }}>
                  
                  <img src={img} width="30" alt={name}></img>
                  
                  </span>
                  {name}
                </button>
              </li>
            ))}

          </ul>
        </div>
        
        </div>
      </div>
        
        <Main/> 

      </div>
    </div>
    
    <div id={theme}>
    <div className='background-questions'>
    <section className='questions-section'>
          <h1 className='title-questions' id="question-title">{t('questions.title')}</h1>
          <Questions></Questions>
      </section>
      </div>
    </div>

      <footer className='footer-box'>
        <Footer/>
      </footer>

 </>
 </ThemeContext.Provider>
  );
}

export default Home;
