import { ProtectedRoute } from "@/features/auth/ui/ProtectedRoute";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "@/pages/home";
import ArticlesPage from "@/pages/articles";
import ExperiencePage from "@/pages/experience";
import TestimonialsPage from "@/pages/testimonials";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { path: '/', element: <HomePage />},
                    { path: '/articles', element: <ArticlesPage page="main"/>},
                    { path: '/articles/new', element: <ArticlesPage page="new"/>},
                    { path: '/articles/:id/edit', element: <ArticlesPage page="edit"/>},
                    { path: '/experience', element: <ExperiencePage />},
                    { path: '/experience/new', element: <ExperiencePage />},
                    { path: '/experience/:id/edit', element: <ExperiencePage />},
                    { path: '/testimonials', element: <TestimonialsPage />},
                    { path: '/testimonials/new', element: <TestimonialsPage />},
                    { path: '/testimonials/:id/edit', element: <TestimonialsPage />},           
                ]
            }
        ]
    }
])