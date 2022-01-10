import { information } from './state';

const Header = () => (
  <div id="info-header" className="flex flex-row flex-wrap items-center m-0 rounded-t-2xl rounded-b-md justify-evenly">
    <div className="relaive">
      <img src="images/profile_picture_square.jpg" alt="Profile pic" className="avatar" />
      <img className="w-10 top-28 left-28 absolute" src="images/LinkedIn QR Code.png" alt="QR Code" />
    </div>
    <div className="text-center mx-10">
      <h1>{information.name}</h1>
      <h2 id="diploma">{information.title}</h2>
      <h3>{information.catch_phrase}</h3>
    </div>
    <div className="information flex flex-col">
      <div className="flex justify-end">
        <h3 className="contact-address-title">Address</h3>
        <div>
          <p className="contact-address">
            <span className="block">
              {information.address.street}
            </span>
            <span className="block">
              {information.address.city}
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <h3 className="contact-info-title">Contact</h3>
        <div>
          <p className="contact-info">
            {information.contacts.map((contact) => (
              <a key={contact.name} className="block" href={contact.href} target={contact.link && '_blank'} rel={contact.link && 'noreferrer'}>
                <i className={contact.icon}> </i>
                {contact.name}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="flex mt-2">
        <div>
          <div id="nationality">10/06/1997, FRENCH</div>
          <div id="nationality" className="mb-1">HETU: 100697-XXX</div>
        </div>
      </div>

    </div>
  </div>
);

export default Header;
