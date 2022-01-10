const Header = () => {
  console.log('My Header');
  return (
    <div id="info-header">
      <img src="images/profile_picture_square.jpg" alt="Profile pic" className="avatar" />
      <div className="hello">
        <h1>Julien TEXIER</h1>
        <h2 id="diploma">Full Stack Engineer & Master's in Management</h2>
        <h3>Ready to tacke a new challenge</h3>
      </div>
      <div className="information">
        <table>
          <tbody>
            <tr>
              <td>
                <h3 className="contact-address-title">Address</h3>
              </td>
              <td>
                <p className="contact-address">
                  <span className="block">
                    Merikasarminkatu 9B 27

                  </span>
                  <span className="block">
                    00160 Helsinki

                  </span>
                  <span className="block">
                    FINLAND

                  </span>
                </p>
              </td>
            </tr>
            <td>
              <h3 className="contact-info-title">Contact</h3>
            </td>
            <td>
              <p className="contact-info">
                <a className="block" href="mailto:julien.texier@ieseg.fr">
                  <i className="fas fa-at fa-sm"> </i>
                  julien.texier@ieseg.fr
                </a>
                <a className="block" href="tel:33622456947">
                  <i className="fas fa-phone fa-sm" />
                  +33 6 22 45 69 47
                </a>
                <a className="block" href="skype:Julien.texier12?call">
                  <i className="fab fa-skype" />
                  Julien.texier12
                </a>
                <a className="block" href="https://github.com/JulienTexier" target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                  JulienTexier
                </a>
                <a className="block" href="https://www.linkedin.com/in/texierjulien/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin" />
                  texierjulien
                </a>
              </p>
            </td>
            <tr>
              <td />
              {/* <td>
                <p id="nationality">10/06/1997, FRENCH</p>
                <p id="nationality">HETU: 100697-XXX</p>
              </td> */}
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
