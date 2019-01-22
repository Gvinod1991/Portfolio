import React from 'react';
const Footer =  () =>{
 const yr = (new Date()).getFullYear();
    return <footer className="footer text-center">
        <p  className="text-center">Copyright &copy; {yr} Kod3r
        </p>
    </footer>
}
export default Footer;