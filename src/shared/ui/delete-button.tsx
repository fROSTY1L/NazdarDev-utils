import { useDeleteArticle } from "@/features/create-article/model/useDeleteArticel"
import { Button } from "./button";
import { Trash } from "lucide-react";

interface Props {
    id: number
}

const DeleteButton = ({ id }: Props) => {
    const { mutate, isPending } = useDeleteArticle();

    const handleDelete = () => {
        if (!confirm('Удалить статью?')) return
        mutate(id);
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
