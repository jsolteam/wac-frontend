import styled, { css } from "styled-components";
import { montserratFamily300, montserratFamily500 } from "../../styles/fonts";

export const Header = styled.header<{ isScroll: boolean; isMenuOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 48px;
    padding: 19px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: background-color 0.3s ease-in-out;
    background-color: ${({ isScroll, isMenuOpen }) => (isScroll || isMenuOpen ? "#000912" : "transparent")};
    z-index: 1000;

    @media (max-width: 700px) {
        justify-content: space-between;
        padding: 14px 24px;
    }
`;

export const Link = styled.a<{ isActive?: boolean; disabled?: boolean }>`
    ${montserratFamily300};
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    user-select: none;
    text-decoration: none;

    ${({ isActive }) => isActive && montserratFamily500};
    ${({ disabled }) =>
            disabled &&
            css`
      color: #9f9f9f;
      text-decoration: line-through;
      pointer-events: none;
    `};

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 1;
    }

    @media (max-width: 700px) {
        font-size: 18px;
        padding: 12px 0;
    }
`;

export const MenuToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 28px;
    height: 28px;

    @media (min-width: 701px) {
        display: none;
    }
`;

export const Burger = styled.div`
    width: 100%;
    height: 3px;
    background-color: white;
    position: relative;

    &::before,
    &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: white;
        position: absolute;
        left: 0;
    }

    &::before {
        top: -8px;
    }

    &::after {
        top: 8px;
    }
`;

export const Cross = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    top: 50%;
    left: 0;
  }

  &::before {
    transform: translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000912;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px 0;

  @media (min-width: 701px) {
    display: none;
  }
`;
