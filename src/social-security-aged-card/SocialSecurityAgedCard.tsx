import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import Select from 'react-select';
import { Doughnut } from 'react-chartjs-2';
import { Options, UserData } from '../types';
import { dollarFormatter } from '../utils';
import { AgeInput, ChartContainer, CardContainer, Divider, Header, HouseholdContainer, IdealContainer, IncomeContainer, IncomeTitle, PaymentText, PrimaryButton, SecondaryButton, SubHeader, Text } from '../styled-components';

const SOCIAL_SECURITY_RETIRE_AGE = 67
const SOCIAL_SECURITY_INCOME = 18000

export const SocialSecurityAgedCard = () => {
  const [userData, setUserData] = useState<UserData>()
  const [options, setOptions] = useState<Options>()
  const [selectedUser, setSelectedUser] = useState<UserData>()
  const [idealRetireAge, setIdealRetireAge] = useState<number>()
  const [yearlyIncome, setYearlyIncome] = useState<number>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/part1/users/1')

      const json = await response.json();

      setUserData(json)
    }
    
    getData()
  }, [])

  useEffect(() => {
    if (!!userData) {
      setOptions([{ label: userData.user_info.full_name || '', value: userData }])
    }
  }, [userData])

  useEffect(() => {
    if (!!selectedUser) {
      const targetIncome = selectedUser.user_info.household_income * (selectedUser.assumptions.pre_retirement_income_percent / 100)

      // Rounding to nearest cent
      const savingsAmountPerYear = +(selectedUser.user_info.household_income * (selectedUser.user_info.current_savings_rate / 100)).toFixed(2)

      // Get age, not going to use a package because this is a pretty easy conversion
      const birthday = new Date(selectedUser.user_info.date_of_birth).getTime()
      const now = new Date().getTime()
      const diff = now - birthday
      let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

      let savingsSum = selectedUser.user_info.current_retirement_savings
      const rate = 1 + (selectedUser.assumptions.expected_rate_of_return / 100)

      let canRetireReturn = false
      do {
        canRetireReturn = canRetire(age, targetIncome, savingsSum, selectedUser.assumptions.life_expectancy)
        age++
        savingsSum += savingsAmountPerYear
        savingsSum *= rate
        savingsSum = +savingsSum.toFixed(2)
      } while(!canRetireReturn)

      setIdealRetireAge(age)
    }
  }, [selectedUser])

  useEffect(() => {
    if(!!idealRetireAge && !!selectedUser) {
      // I should be making this into some sort of re-usable function, because it's the same as above mostly, but due to time I'm not
      const birthday = new Date(selectedUser.user_info.date_of_birth).getTime()
      const now = new Date().getTime()
      const diff = now - birthday
      let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const lifeExpentancy = selectedUser.assumptions.life_expectancy

      const savingsAmountPerYear = +(selectedUser.user_info.household_income * (selectedUser.user_info.current_savings_rate / 100)).toFixed(2)
      let savingsSum = selectedUser.user_info.current_retirement_savings
      const rate = 1 + (selectedUser.assumptions.expected_rate_of_return / 100)

      while (age <= idealRetireAge) {
        savingsSum += savingsAmountPerYear
        savingsSum *= rate
        savingsSum = +savingsSum.toFixed(2)
        age++
      }

      setYearlyIncome(+(savingsSum / (lifeExpentancy - idealRetireAge)).toFixed(2))
    } else {
      // Reset
      setYearlyIncome(0)
    }
  }, [idealRetireAge, selectedUser])

  const canRetire = (age: number, targetIncome: number, totalSavings: number, lifeExpentancy: number) => {
    // This variable name is unfortunate lol, but how many years they are going to be alive in retirement
    const yearsAlive = lifeExpentancy - age

    // The amount of money they need total to retire at the current age
    let totalIncomeSum = targetIncome * yearsAlive

    // Calculating how much they get from social security
    let socialSecurityIncomeYears = yearsAlive
    if (age < SOCIAL_SECURITY_RETIRE_AGE) {
      const difference = lifeExpentancy - SOCIAL_SECURITY_RETIRE_AGE
      socialSecurityIncomeYears -= difference
    }
    const socialSecurityIncomeSum = SOCIAL_SECURITY_INCOME * socialSecurityIncomeYears


    // Subtracting social secuirty from the total amount they need to have saved
    totalIncomeSum -= socialSecurityIncomeSum

    // If somehow their social security fully covered their retirement goal, return true
    if (totalIncomeSum <= 0) {
      return true
    }

    // If their savings is more than the amount they need to save, return true
    return totalSavings >= totalIncomeSum
  }

  return (
    <CardContainer>
      <Header>Best Social Security Claimed Age</Header>
      <SubHeader>Our Recommendation</SubHeader>
      {!!selectedUser && !!yearlyIncome && 
        <ChartContainer>
          <IncomeContainer>
            <IncomeTitle>Estimated Household Annual Income</IncomeTitle>
            <Header>{dollarFormatter.format(yearlyIncome)}</Header>
          </IncomeContainer>
          <Doughnut data={{
            labels: [`${selectedUser?.user_info.full_name} - ${dollarFormatter.format(yearlyIncome)}`],
            datasets: [{
              label: selectedUser?.user_info.full_name,
              data: [yearlyIncome],
            }],
          }} options={{
            cutout: '80%'
          }} />
        </ChartContainer>
      }
      <Divider />
      <HouseholdContainer>
        <Text>Household Members</Text>
        <Select
          options={options}
          onChange={(value) => setSelectedUser(value?.value)}
        />
      </HouseholdContainer>
      {!!selectedUser && 
        <>
          <IdealContainer>
            <div style={{ width: '150px', display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
              <Text>Your ideal retire age</Text>
              <AgeInput type="number" value={idealRetireAge || ''} onChange={(event) => setIdealRetireAge(+event.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Text>Annual Social Security Payment</Text>
              <PaymentText>$18,000</PaymentText>
            </div>
          </IdealContainer>
          <div style={{ marginTop: '20px', display: 'flex', width: '100%', justifyContent: 'center' }}>
            <SecondaryButton onClick={() => console.log(`${selectedUser.user_info.full_name} - ${idealRetireAge}`)}>Use ideal {idealRetireAge}</SecondaryButton>
            <PrimaryButton onClick={() => console.log(`${selectedUser.user_info.full_name} - ${selectedUser?.assumptions.retirement_age}`)}>Accept {selectedUser?.assumptions.retirement_age}</PrimaryButton>
          </div>
        </>
      }
    </CardContainer>
  );
}
