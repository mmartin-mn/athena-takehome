import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components'
import { Options, UserData } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  align-items: center;
`

const Header = styled.h1`
  color: #1B1D3D;
  font-size: 20px;
  line-height: 32px;
  font-family: Poppins;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
`

const SubHeader = styled.h2`
  color: #1B1D3D;
  font-family: Poppins;
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: 0.5px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Divider = styled.hr`
  border-top: 2px solid #E2E1E1;
  border-radius: 2px;
  width: 100%;
`

const HouseholdContainer = styled.div`
  width: 300px;
  align-items: center;
`

const IdealContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 360px;
`

const Text = styled.p`
  margin: 0;
  color: #1B1D3D;
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
`

const PaymentText = styled.p`
  margin: 0;
  color: #707070;
  font-family: Poppins;
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  margin-top: 20px;
`

const AgeInput = styled.input`
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
`

const SecondaryButton = styled.button`
  border: 1px solid #1B1D3D;
  color: #1B1D3D;
  background: none;
  width: 175px;
  height: 40px;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: normal;
`

const PrimaryButton = styled.button`
  border: 1px solid #1B1D3D;
  color: #45EEE9;
  background: #1B1D3D;
  width: 175px;
  height: 40px;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: normal;
  margin-left: 40px;
`

export const SocialSecurityAgedCard = () => {
  const [userData, setUserData] = useState<UserData>()
  const [options, setOptions] = useState<Options>()
  const [selectedUser, setSelectedUser] = useState<UserData>()


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

  return (
    <Container>
      <Header>Best Social Security Claimed Age</Header>
      <SubHeader>Our Recommendation</SubHeader>
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
              <AgeInput type="number" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Text>Annual Social Security Payment</Text>
              <PaymentText>$18,000</PaymentText>
            </div>
          </IdealContainer>
          <div style={{ marginTop: '20px', display: 'flex', width: '100%', justifyContent: 'center' }}>
            <SecondaryButton>Use ideal 63</SecondaryButton>
            <PrimaryButton>Accept {selectedUser?.assumptions.retirement_age}</PrimaryButton>
          </div>
        </>
      }
    </Container>
  );
}
