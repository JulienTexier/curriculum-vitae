import {
  Experience, Language, Row, SectionTitle,
} from './helpers';
import { educationList, languagesList } from './state';

const Education = () => {
  const Section1 = (
    <>
      <SectionTitle title="EDUCATION" icon="fas fa-graduation-cap" />
      {educationList.map((exp) => <Experience key={exp.company} company={exp.company} logo={exp.logo} location={exp.location} duration={exp.duration} title={exp.title} info={exp.info} description={exp.description} />)}
    </>
  );

  const Section2 = (
    <>
      <SectionTitle title="LANGUAGES" icon="fas fa-comments" />
      {languagesList.map((lan) => <Language key={lan.locale} locale={lan.locale} name={lan.name} level={lan.level} details={lan.details} score={lan.score} />)}
    </>
  );

  return <Row Section1={Section1} Section2={Section2} />;
};

export default Education;
