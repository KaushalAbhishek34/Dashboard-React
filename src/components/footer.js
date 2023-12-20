function Footer (){
    return (
        <>
         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with social networks:</span>
            </div>
        
            <div>
              <a href="#"  onClick={(e) => e.preventDefault()} className="me-4 text-reset">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#"  onClick={(e) => e.preventDefault()} className="me-4 text-reset">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#"  onClick={(e) => e.preventDefault()} className="me-4 text-reset">
                <i className="bi bi-google"></i>
              </a>
              <a href="#"  onClick={(e) => e.preventDefault()} className="me-4 text-reset">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#"  onClick={(e) => e.preventDefault()} className="me-4 text-reset">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#"  onClick={(e) => e.preventDefault()}  className="me-4 text-reset">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </section>
          <div className="d-flex justify-content-between" >
          <div className="text-center p-4" >
            © 2023 Copyright:Bootsrap Example
          </div>
          <div className="p-4">
            <a href=""  onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="dot">.</span>
            <a href=""  onClick={(e) => e.preventDefault()}>Terms & conditions</a>
          </div>
        </div>
          
          
        </>     
    );
}
export default Footer;