import './info.css'
import IntroductionComponent from './introduction/introduction'
import SkillsComponent from './skills/skills'
import FooterComponent from '../footer/footer'

const InfoComponent = () => {
  return (
    <section id="info" className="bg-info flex flex-col h-full">
      <div className="base-1/2 h-full">
        <IntroductionComponent />
      </div>
      <div className="h-full">
        <SkillsComponent />
      </div>
      <FooterComponent />
    </section>
  )
}

export default InfoComponent
