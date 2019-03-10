import React from 'react';
const Footer =  () =>{
 const yr = (new Date()).getFullYear();
    return <footer className="footer text-center">
        <p  className="text-center">Copyright &copy; {yr} {'<Kod3r />'} Made with <i className="fa fa-heart"></i>
        </p>
    </footer>
}
export default Footer;