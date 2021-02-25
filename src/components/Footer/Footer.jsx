import style from './Footer.module.scss';
import logoRS from '../../img/rs_school_js.svg';
import logoGitHub from '../../img/github.svg';

const Footer = () => {
   return (
      <footer>
         <div className="wrapper">
            <div className={style.footer}>
               <span>2021 </span>
               <span className={style.logoRS}>
                  <a href="https://rs.school/js" target="_blank" title="Курс «JavaScript/Front-end»" rel="noreferrer"><img
                     src={logoRS} alt="logo" width="50" /></a>
               </span>
               <img src={logoGitHub} alt="github" width="20" />
               <span>
                  <a href="https://github.com/Vadim-Bykov" target="_blank" title="github.com/Vadim-Bykov" rel="noreferrer">Vadim-Bykov</a>
               </span>
            </div>
         </div>
      </footer>
   );
}

export default Footer;