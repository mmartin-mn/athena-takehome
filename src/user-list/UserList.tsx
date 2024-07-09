import React, { useEffect, useState } from 'react';
import { UserData } from '../types';
import { Header, Row, SubHeader, Table, TableItem } from '../styled-components';
import { dollarFormatter } from '../utils';

export const UserList = () => {
  const [userData, setUserData] = useState<UserData[]>([])
  const [displayData, setDisplayData] = useState<UserData[]>([])


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/users/1')

      const json = await response.json();

      setUserData([json])
    }
    
    getData()
  }, [])

  useEffect(() => {
    if (!!userData && userData.length > 0) {
      // First, filter users under 250,000
      const filteredData = userData.filter(data => data.user_info.household_income >= 250000)

      // Next, sort them by last name
      const sortedData = filteredData.sort((a, b) => {
        const lastNameA = a.user_info.full_name.split(' ')[1]
        const lastNameB = b.user_info.full_name.split(' ')[1]

        if (lastNameA < lastNameB) {
          return -1
        } else if (lastNameA > lastNameB) {
          return 1
        } else {
          return 0
        }
      })

      setDisplayData(sortedData)
    } else {
      setDisplayData([])
    }
  }, [userData])

  const ItemRow = ({data}: {data: UserData}) => {
    return <Row>
      <TableItem>{data.user_info.full_name}</TableItem>
      <TableItem>{dollarFormatter.format(data.user_info.household_income)}</TableItem>
    </Row>
  } 

  return (
    <Table>
      <Header>Users</Header>
      <Row>
        <TableItem>
          <SubHeader>Name</SubHeader>
        </TableItem>
        <TableItem>
          <SubHeader>Income</SubHeader>
        </TableItem>
      </Row>
      {displayData.map(data => <ItemRow data={data} />)}
    </Table>
  );
}

