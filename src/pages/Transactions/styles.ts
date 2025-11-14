import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%; //se for menor que 1120px então ocupa 100%
  max-width: 1120px; //se for maior que 1120px então ocupa 1120px
  margin: 4rem auto 0; //centraliza horizontalmente
  padding: 0 1.5rem; //espaçamento lateral
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighLightProps {
  variant?: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const Detod = styled.div``;
