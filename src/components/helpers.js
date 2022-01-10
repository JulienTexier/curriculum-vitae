export const SectionTitle = ({ title, icon }) => (
  <h2>
    <i className={icon} />
    {title}
    <hr />
  </h2>
);

export const Row = ({ Section1, Section2 }) => (
  <div className="flex">

    <div className="card w-2/3 p-4 rounded-xl mb-2 flex flex-col">
      {Section1}
    </div>
    <div className="card w-1/3 p-4 rounded-xl mb-2 ml-2 flex flex-col">
      {Section2}
    </div>
  </div>
);

export const Experience = ({
  company,
  logo,
  location,
  duration,
  title,
  info,
  description,
}) => (
  <div className="w-full m-auto flex py-2">
    <div className="w-1/4">
      <h4>
        <div className="block">
          <img className="object-scale-down h-8 w-8 float-right mr-3" src={`images/${logo}`} alt={`${company} logo`} />
          {company}
        </div>
        <div className="block font-normal">{location}</div>
      </h4>
      <span className="block">{duration}</span>
    </div>
    <div className="w-3/4">
      <h4 className="bold inline">{title}</h4>
      {info && <span className="block">{info}</span>}
      <p className="italic">
        {description}
      </p>
    </div>
  </div>
);

export const Language = ({
  locale, score, name, level, details,
}) => (
  <>
    <div className="mt-3 flex-1">
      <div className="float-right w-3/4">
        <div className={`meter ${locale}`}>
          <span style={{ width: `${score}%` }} />
        </div>
      </div>
      <p className="text-blue-800 text-base">{name}</p>
    </div>
    <span className="ml-8">{level}</span>
    <ul className="check-list">
      {details && details.map((detail, i) => <li key={i} className="pl-2 relative">{detail}</li>)}
    </ul>

  </>

);
