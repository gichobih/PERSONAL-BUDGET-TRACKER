import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts.js';
import Orb from './components/Orb/orb.js';
import Navigation from './components/Navigation/Navigation.js';
import React, { useMemo, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.js';
import Incomes from './components/Incomes/Incomes.js';
import Expenses from './components/Expenses/Expenses.js';
import { useGlobalContext } from './context/Globalcontext.js';
import styled from 'styled-components';


function App() {
  const [active, setActive] = useState(1);


  const global = useGlobalContext()
  console.log(global);
  const displayData= () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
      return <Dashboard/>
    }
  } 
  const orbMemo = useMemo(()=> {
  return <Orb/>
},[])
  return (
    <AppStyled $bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
        {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background: url(${props => props.$bg}) no-repeat center center fixed;
  background-size: cover;
  position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
     width: 100%;
  }
}
`;

export default App;
