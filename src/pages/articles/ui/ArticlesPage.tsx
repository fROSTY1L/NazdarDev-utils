import CreateArticleForm from "@/features/article/ui/CreateArticleForm"
import ArticlesTable from "@/widgets/articles-table"

interface ArticlePageProps {
  page: "new" | "edit" | "main"
}

const ArticlesPage = ({ page = "main" }: ArticlePageProps) => {
  switch (page) {
    case "new":
      return <CreateArticleForm />
    case "edit":
      return <ArticlesTable />
    default:
      return <ArticlesTable />
  }
    
}

export default ArticlesPage
