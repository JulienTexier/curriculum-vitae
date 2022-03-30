import {
  Experience, Row, SectionTitle,
} from './helpers';
import { experiencesList, skillsList } from './state';

const Experiences = () => {
  const Section1 = (
    <>
      <SectionTitle title="WORK EXPERIENCE" icon="fas fa-briefcase" />
      {experiencesList.map((exp) => <Experience key={exp.company} company={exp.company} logo={exp.logo} location={exp.location} duration={exp.duration} title={exp.title} description={exp.description} />)}
    </>
  );

  const Section2 = (
    <>
      <SectionTitle title="SKILLS" icon="fas fa-bolt" />
      <div className="flex-1">
        <div className="block mx-auto w-full text-center">
          <img className="w-36 h-36" src="/images/Word Cloud Julien Texier (2).png" alt="Word Cloud of Soft Skills" />
        </div>
        {skillsList.map((skill) => (
          <section key={skill.name} className="mb-2 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700">
                {skill.name}
              </h3>
            </header>

            <div className="my-1 last:pb-1">
              <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
                {skill.details.map((detail) => (
                  <li key={detail} className="px-2 mr-1 mb-1 text-gray-750 leading-relaxed bg-gray-200">

                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
        {/* <h5>- COMPUTER -</h5>
        <div className="suites">
          <img className="adobe" src="/images/indesign.png" alt="Adobe InDesign" />
          <img className="adobe" src="/images/photoshop.png" alt="Adobe Photoshop" />
          <img className="adobe" src="/images/premiere.png" alt="Adobe Premiere Pro" />
          <img className="adobe" src="/images/lightroom.png" alt="Adobe Lightroom" />
        </div>
        <div className="suites">
          <img className="SEO" src="/images/wordpress.png" alt="Wordpress" />
          <img className="SEO" src="/images/ahrefs.png" alt="Ahref" />
          <img className="SEO" src="/images/screaming-frog-logo.png" alt="Screaming Frog" />
          <img className="SEO" src="/images/google-analytics-logo.png" alt="Google Analytics" />
        </div>
        <img id="front-end" src="/images/front-end.jpg" alt="HTML, Javascript, CSS" />
        <div className="suites">
          <img className="back-end" src="/images/Ruby_On_Rails_Logo.svg.png" alt="Ruby on Rails" />
          <img className="back-end" src="/images/postgresql.png" alt="PostgreSQL" />
        </div>

        <div className="suites">
          <img className="office" src="/images/microsoft-office.png" alt="Microsoft Office" />
          <img className="office" src="/images/google-docs.png" alt="Google Docs" />
        </div> */}

      </div>
    </>
  );

  return <Row Section1={Section1} Section2={Section2} />;
};
export default Experiences;
