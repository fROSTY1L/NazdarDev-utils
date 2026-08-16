import { Button } from "./button";
import { Trash } from "lucide-react";


interface Props {
    id: number
    title: string
    isPending: boolean
    onDelete: (id: number) => void
}

const DeleteButton = ({ id, title, onDelete, isPending }: Props) => {
    const handleDelete = () => {
        if (!confirm(`Удалить объект: ${title}`)) return
        onDelete(id);
    }

  return (
    <Button 
        variant={"destructive"}
        disabled={isPending}
        onClick={handleDelete}
        >
        <Trash />
    </Button>
  )
}

export default DeleteButton
