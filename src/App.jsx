import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import ProtectedRoute from "./ProtectedRoute";
import LayoutHome from "./layouts/LayoutHome";
import { TaskProvider } from "./context/TasksContext";
import SeeTaskPage from "./pages/SeeTaskPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<LayoutHome />}>
                <Route path="/" element={<TasksPage />} />
                <Route path="/tasks/:id" element={<SeeTaskPage />} />
                <Route path="/update-task/:id" element={<TasksFormPage />} />
                <Route path="/add-task" element={<TasksFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
