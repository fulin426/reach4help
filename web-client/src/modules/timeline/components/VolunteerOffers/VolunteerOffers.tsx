import {
  HeartOutlined,
  StarOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled, { keyframes } from 'styled-components';

interface VolunteerOffersProps {
  name: string;
}

const Item = styled.div`
  overflow: auto;
  margin: 15px;
  padding: 20px 16px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const UserPic = styled.img`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 10px;
  border-radius: 105px;
  animation: ${fadeIn} 0.75s;
  object-fit: cover;
`;

const UserName = styled.text`
  font-size: 20px;
  font-weight: bold;
`;

const TextVolunteer = styled.text`
  display: block;
  font-weight: 900;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
`;

const IconsBlock = styled.div`
  display: block;
`;

const IconContainer = styled.div`
  color: #811e78;
  display: inline-block;
  margin-left: 12px;
`;

const IconContainerFirst = styled(IconContainer)`
  margin-left: 0;
`;

const TextIcon = styled.text`
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  height: 36px;
  border-radius: 4px;
  max-width: 150px;
  width: 47%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const AcceptButton = styled(StyledButton)`
  background-color: #52c41a;
  color: #fff;
  margin-left: 14px;
`;

const ButtonsContainer = styled.div`
  margin-top: 12px;
`;

const VolunteerOffers: React.FC<VolunteerOffersProps> = ({ name }) => (
  <>
    <Title>Select A Volunteer</Title>
    <Item>
      <UserPic src="https://via.placeholder.com/100" alt="Profile pic" />
      <UserName>{name}</UserName>

      <TextVolunteer>Volunteer</TextVolunteer>
      <IconsBlock>
        <IconContainerFirst>
          <HeartOutlined />
        </IconContainerFirst>
        <TextIcon>15</TextIcon>
        <IconContainer>
          <StarOutlined />
        </IconContainer>
        <TextIcon>4.5</TextIcon>
        <IconContainer>
          <HeartOutlined />
        </IconContainer>
        <TextIcon>5 km</TextIcon>
      </IconsBlock>
      <ButtonsContainer>
        <StyledButton>
          {' '}
          <UserSwitchOutlined />
          Reject
        </StyledButton>
        <AcceptButton>
          <HeartOutlined />
          Accept
        </AcceptButton>
      </ButtonsContainer>
    </Item>
  </>
);

export default VolunteerOffers;
