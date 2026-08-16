import { useExperience } from "@/features/experience/model/useExperience"
import ExperienceBlock from "./ExperienceBlock";

const ExperienceChain = () => {
  const { data: experienceList = [], isLoading } = useExperience();
  if (isLoading) return (<div>Загрузка...</div>)
  return (
    <div className="border-l pl-5">
      {experienceList.map((experienceItem) => (
        <ExperienceBlock {...experienceItem} />
      ))}
    </div>
  )
}

export default ExperienceChain
