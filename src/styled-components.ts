import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  align-items: center;
`;

export const Header = styled.h1`
  color: #1b1d3d;
  font-size: 20px;
  line-height: 32px;
  font-family: Poppins;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
`;

export const SubHeader = styled.h2`
  color: #1b1d3d;
  font-family: Poppins;
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: 0.5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Divider = styled.hr`
  border-top: 2px solid #e2e1e1;
  border-radius: 2px;
  width: 100%;
`;

export const HouseholdContainer = styled.div`
  width: 300px;
  align-items: center;
`;

export const IdealContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 360px;
`;

export const Text = styled.p`
  margin: 0;
  color: #1b1d3d;
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
`;

export const PaymentText = styled.p`
  margin: 0;
  color: #707070;
  font-family: Poppins;
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  margin-top: 20px;
`;

export const AgeInput = styled.input`
  color: #707070;
  font-family: Poppins;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  border: none;
  border-bottom: 1.5px solid #323456;
  outline: none;
  text-align: center;
  margin-top: 20px;
`;

export const SecondaryButton = styled.button`
  border: 1px solid #1b1d3d;
  color: #1b1d3d;
  background: none;
  width: 175px;
  height: 40px;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: normal;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  border: 1px solid #1b1d3d;
  color: #45eee9;
  background: #1b1d3d;
  width: 175px;
  height: 40px;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: normal;
  margin-left: 40px;
  cursor: pointer;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const IncomeContainer = styled.div`
  position: absolute;
  width: 200px;
  text-align: center;
`;

export const IncomeTitle = styled.p`
  margin: 0;
  margin-top: 30px;
  color: #7c7c7c;
  font-family: Poppins;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const TableItem = styled.div`
  width: 150px;
`;
