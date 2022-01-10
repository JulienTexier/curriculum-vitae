import { SectionTitle } from './helpers';
import { hobbiesList } from './state';

const Hobbies = () => (
  <div className="card p-4 rounded-xl flex flex-col text-center">
    <SectionTitle title="HOBBIES & INTERESTS" />
    <div className="hobbies my-2 mx-1 flex">
      {hobbiesList.map((hobby) => (
        <div key={hobby.locale} className={`${hobby.locale}`}>
          <h2 className="mb-1">
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
