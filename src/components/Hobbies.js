import { SectionTitle } from './helpers';
import { hobbiesList } from './state';

const Hobbies = () => (
  <div className="hobbies-section">
    <SectionTitle title="HOBBIES & INTERESTS" />
    <div className="hobbies">
      {hobbiesList.map((hobby) => (
        <div key={hobby.locale} className={hobby.locale}>
          <h2>
            <i className={hobby.icon} />
            {hobby.name}
          </h2>
          {hobby.details.map((detail, i) => (
            <p key={i}>{detail}</p>))}
        </div>
      ))}
    </div>
  </div>

);

export default Hobbies;
