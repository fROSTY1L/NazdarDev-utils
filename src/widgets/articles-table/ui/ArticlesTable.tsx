import { useArticles } from "@/features/article/model/useArticles"
import { useDeleteArticle } from "@/features/article/model/useDeleteArticel"
import { Button } from "@/shared/ui/button"
import DeleteButton from "@/shared/ui/delete-button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"


const ArticlesTable = () => {
  const { data: articles = [], isLoading } = useArticles()
  const { mutate, isPending } = useDeleteArticle();
  if (isLoading) return (<div>Loading...</div>)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Дата</TableHead>
          <TableHead></TableHead>
           <TableHead className="flex justify-end items-center">
            <Link to={"new"}><Button>
              Добавить
              <Plus/>
            </Button>
            </Link>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{article.title}</TableCell>
            <TableCell>{article.created_at}</TableCell>
            <TableCell>
              <Link to={`/articles/${article.id}/edit`}>Редактировать</Link>
            </TableCell>
            <TableCell className="flex justify-end">
              <DeleteButton 
                  id={article.id} 
                  title={article.title}
                  onDelete={mutate} 
                  isPending={isPending}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ArticlesTable
