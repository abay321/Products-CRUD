import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import sx from './RootLayout.module.css'

function RootLayout() {
  return (
    <>
      <Header />
      <main className={sx.main}> 
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
