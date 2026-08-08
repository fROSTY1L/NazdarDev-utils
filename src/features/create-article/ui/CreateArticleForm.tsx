import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { useCreateArticle } from "../model/useCreateArticle";
import type { ArticleInsert } from "@/entities/articles";
import MDEditor from "@uiw/react-md-editor";

function calculateReadingTime(text: string): number {
  if (!text) return 1;

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

const CreateArticleForm = () => {
  const { mutate, isPending, error } = useCreateArticle();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ArticleInsert>({
    defaultValues: {
      title: "",
      description: "",
      article: "",
      img: "",
      reading_time: 1,
    },
  });

  const articleText = watch("article");

  useEffect(() => {
    const time = calculateReadingTime(articleText || "");
    setValue("reading_time", time);
  }, [articleText, setValue]);

  const onSubmit = (data: ArticleInsert) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <label className="text-sm font-medium">Заголовок</label>
        <input
          {...register("title", { required: "Обязательное поле" })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Заголовок статьи"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Краткое описание</label>
        <textarea
          {...register("description")}
          rows={3}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Краткое описание"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Ссылка на изображение</label>
        <input
          {...register("img")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="https://..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Текст статьи (Markdown)</label>
        <Controller
          name="article"
          control={control}
          rules={{ required: "Напишите текст статьи" }}
          render={({ field }) => (
            <div data-color-mode="light" className="overflow-hidden rounded-md border">
              <MDEditor
                value={field.value}
                onChange={(value) => field.onChange(value || "")}
                height={450}
                preview="live"
              />
            </div>
          )}
        />
        {errors.article && (
          <p className="text-sm text-red-500">{errors.article.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Время чтения</label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            {...register("reading_time", { valueAsNumber: true })}
            readOnly
            className="flex h-10 w-24 rounded-md border border-input bg-muted px-3 py-2 text-sm"
          />
          <span className="text-sm text-muted-foreground">мин.</span>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message || "Ошибка при создании статьи"}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
      >
        {isPending ? "Создание..." : "Создать статью"}
      </button>
    </form>
  );
};

export default CreateArticleForm;