import { footerLinks } from "../Data/Data";

function Footer() {
    return (
        <>
        <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <i className="bi bi-person-arms-up mx-2"></i>
      i Jobs
      </a>
      <p>Lorem ipsum dolor sit amet  labore ab enim at quod, quis tempora ut illo sapiente possimus quas autem!</p>
      <p className="text-body-secondary">© 2024</p>
      <p>
      <i className="bi bi-instagram" style={{cursor:'pointer'}}></i><i className="mx-3 bi bi-whatsapp" style={{cursor:'pointer'}}></i><i className="mx-3bi bi-facebook" style={{cursor:'pointer'}}></i><i className="mx-3 bi bi-linkedin" style={{cursor:'pointer'}}></i><i className="bi bi-twitter-x" style={{cursor:'pointer'}}></i>
      </p>

    </div>

    <div className="col mb-3">

    </div>
        
    {
        footerLinks.map((item, idx) => {
            return (
                <>
                <div className="col mb-3" key={idx}>
      <h5>{item.title}</h5>
      <ul className="nav flex-column">
        {
            item.links.map((l, idx) => {
                return (
                <>
                <li className="nav-item mb-2" key={idx}><a href="#" className="nav-link p-0 text-body-secondary">{l}</a></li>
                </>
                )
            })
        }
        
      </ul>
    </div>
                </>
            )
        })
    }
    

  
  </footer>
</div>
        </>
    )
}

export default Footer;