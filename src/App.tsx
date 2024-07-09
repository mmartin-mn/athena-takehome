import React, { useState } from 'react';
import './App.css';
import { SocialSecurityAgedCard } from './social-security-aged-card/SocialSecurityAgedCard';
import { UserList } from './user-list/UserList';
import { AppContainer, PrimaryButton } from './styled-components';

function App() {
  const [part, setPart] = useState<'part1' | 'part2' | ''>('')

  const renderHelper = () => {
    if (part === 'part1' || part === '') {
      return <SocialSecurityAgedCard />
    } else {
      return <UserList />
    }
  }

  return (
    <AppContainer>
      <div>
        <PrimaryButton onClick={() => setPart('part1')}>Part 1</PrimaryButton>
        <PrimaryButton onClick={() => setPart('part2')}>Part 2</PrimaryButton>
      </div>
      <div style={{ marginTop: '20px'}}>
        {renderHelper()}
      </div>
    </AppContainer>
  );
}

export default App;
