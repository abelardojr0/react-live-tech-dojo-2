import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../utils/cores";

export const LayoutStyledLogo = styled.img`
  max-width: 80px;
`;

export const LayoutStyledHeader = styled.header`
  background-color: #2f4f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const LayoutStyledLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

export const LayoutStyledItem = styled(Link)`
  color: ${cores.marromClaro};
  text-decoration: none;
  font-size: 24px;
  font-family: "Josefin Sans", serif;
`;

export const LayoutStyledRodape = styled.footer`
  background-color: #2f4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  color: white;
`;
