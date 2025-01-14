import { Link, Outlet } from "react-router-dom";
import {
  LayoutStyledHeader,
  LayoutStyledItem,
  LayoutStyledLista,
  LayoutStyledLogo,
  LayoutStyledRodape,
} from "./style";

export const Layout = () => {
  return (
    <>
      <LayoutStyledHeader>
        <LayoutStyledLogo
          src="https://i.pinimg.com/originals/de/7a/d6/de7ad64b093e745891bc2243a82b6a0c.png"
          alt="logo da barbearia"
        />

        <nav>
          <LayoutStyledLista>
            <li>
              <LayoutStyledItem to={"/"}>Home</LayoutStyledItem>
            </li>
            <li>
              <LayoutStyledItem to={"/barbeiros"}>Barbeiros</LayoutStyledItem>
            </li>
            <li>
              <LayoutStyledItem to={"/servicos"}>Serviços</LayoutStyledItem>
            </li>
            <li>
              <LayoutStyledItem to={"/atendimentos"}>
                Atendimentos
              </LayoutStyledItem>
            </li>
          </LayoutStyledLista>
        </nav>
      </LayoutStyledHeader>

      <main>
        <Outlet />
      </main>

      <LayoutStyledRodape>
        <h3>Barbearia X</h3>
        <p>Todos os Direitos Reservados ©</p>
      </LayoutStyledRodape>
    </>
  );
};
