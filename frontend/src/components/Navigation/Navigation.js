import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';



function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt='User Avatar' />
        <div className='text'>
          <h2>Dennis</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className='bottom-nav'>
        <li>
          {signout} Sign Out
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  background: rgba(252, 246, 249, 0.78);
  height: 100%;
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    .text {
      h2 {
        margin: 0;
        font-size: 1.2rem;
      }
      p {
        margin: 0;
        color: #888;
      }
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin-top: 20px;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }

      &.active {
        background-color: #dcdcdc;
      }
    }
  }

  .bottom-nav {
    list-style: none;
    padding: 0;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
      span {
        font-size: 1rem;
      }
    }
  }
    .active{
         color:rgba(34, 34, 96, 1) !important;
         i{
             color:rgba(34, 34, 96, 1) !important;
         }
         &::before{
             content:"";
             position: absolute;
             left: 0;
             top: 0;
             width: 4px;
             height: 100%;
             background: #222260;
             border-radius: 0 10px 10px 0;
         }
    }
`;

export default Navigation;