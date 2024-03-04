import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ input }) {
  const annualData = calculateInvestmentResults(input);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearData) => {
          const totalInterest =yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
