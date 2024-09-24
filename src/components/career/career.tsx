import './career.css'
import EducationComponent from './education/education'
import ExperienceComponent from './experience/experience'
import FooterComponent from '../footer/footer'

const CareerComponent = () => {
  return (
    <section id="career" className="bg-career flex flex-col h-full">
      <div className="base-1/2 h-full">
        <EducationComponent />
      </div>
      <div className="h-full">
        <ExperienceComponent />
      </div>
      <FooterComponent />
    </section>
  )
}

export default CareerComponent
