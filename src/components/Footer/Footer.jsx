import style from './Footer.module.scss';
import logoRS from '../../assets/img/rs_school_js.svg';
import logoGitHub from '../../assets/img/github.svg';
import { useRef } from 'react';
import { useHotkeys } from "react-hotkeys-hook";

const Footer = () => {

   const refRS = useRef();
   const refGitHub = useRef();
   
   useHotkeys('r+s', () => refRS.current.click());
   useHotkeys('g+h', () => refGitHub.current.click());

   return (
      <footer>
         <div className="wrapper">
            <div className={style.footer}>
               <span>2021 </span>
               <span className={style.logoRS}>
                  <a ref={refRS} href="https://rs.school/js" target="_blank" title="Курс «JavaScript/Front-end»" rel="noreferrer"><img
                     src={logoRS} alt="logo" width="50" /></a>
               </span>
               <img src={logoGitHub} alt="github" width="20" />
               <span>
                  <a ref={refGitHub} href="https://github.com/Vadim-Bykov" target="_blank" title="github.com/Vadim-Bykov" rel="noreferrer">Vadim-Bykov</a>
               </span>
            </div>
         </div>
      </footer>
   );
}

export default Footer;