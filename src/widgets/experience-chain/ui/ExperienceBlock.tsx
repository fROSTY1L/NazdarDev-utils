import type { Experience } from "@/entities/experience/models/types"
import { useDeleteExperience } from "@/features/experience/model/useDeleteExperience";
import { DateFormatter } from "@/shared/lib/date/formatter"
import DeleteButton from "@/shared/ui/delete-button";
import { Dot } from "lucide-react"

const ExperienceBlock = (experience: Experience) => {
    const from = DateFormatter(experience.from);
    const until = DateFormatter(experience.until);
    const { mutate, isPending } = useDeleteExperience()
  return (
    <div className="relative">
        <Dot className="absolute -left-11 -top-3" size={48}/>
      <div>
        <div>{`${from} | ${until}`}</div>
        <h1 className="text-3xl">{experience.title}</h1>
        <div>{experience.description}</div>
      </div>
      <DeleteButton 
        id={experience.id} 
        title={experience.title}
        onDelete={mutate} 
        isPending={isPending}/>
    </div>
    
  )
}

export default ExperienceBlock
