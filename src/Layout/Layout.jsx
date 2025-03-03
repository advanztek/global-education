import { useLocation } from "react-router-dom";
import { Header, Footer } from "../Component";

export default function Layout({ children }) {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/reset", "/recovery-email", "/reset-password"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
   
  return (
    <>
      {!hideLayout &&  <Header />}
      {children}
      {!hideLayout &&  <Footer/>}
    </>
  )
}