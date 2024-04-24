import styled from 'styled-components';

export const ReplyItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const ReplyItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReplyItemHeaderleft = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplyItemProfileImage = styled.img`
  object-fit: cover;
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

export const ReplyItemUserName = styled.a`
  margin: 0 5px 0 15px;
`;

export const ReplyItemWriterBadge = styled.div`
  padding: 2.4px 9px;
  font-family: pretendard, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.1rem;
  line-height: 1.5;
  background-color: var(--primary-01);
  color: var(--white);
  border-radius: 6px;
  letter-spacing: 0.06em;
`;

export const ReplyItemContent = styled.div`
  padding: 15px 0 0 45px;
`;

export const ReplyItemButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
