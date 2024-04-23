import styled from 'styled-components';

export const ReplyItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplyItemHeaderleft = styled.div`
  display: flex;
`;

export const ReplyItemProfileImage = styled.img`
  width: 10%;
  border-radius: 50%;
  border: 1px solid black;
`;

export const ReplyItemUserName = styled.a`
  margin: 0 5px 0 15px;
`;

export const ReplyItemWriterBadge = styled.div`
  padding: 2.4px 9px;
  font-family: pretendard, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.5;
  background-color: var(--primary-01);
  color: var(--white);
  border-radius: 6px;
  letter-spacing: 0.06em;
`;

export const ReplyItemDate = styled.div`
  width: 72%;
  text-align: end;
`;

export const ReplyItemButtonContainer = styled.div`
  display: flex;
`;
