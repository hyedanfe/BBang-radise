import useGetDate from '@hooks/utils/useGetDate';

function useBadge(item) {
  const date = new Date();
  const today = useGetDate(date);

  if (item?.classAt < today || item?.endAt < today) {
    return {
      badgeType: 'inactive',
      quantityColor: 'gray06',
      textColor: 'gray06',
      expired: true,
    };
  } else if (item?.startAt > today) {
    return {
      badgeType: 'queue',
      quantityColor: 'gray07',
      textColor: 'black',
      expired: false,
    };
  } else if (item?.buyQuantity == item?.quantity) {
    return {
      badgeType: 'closed',
      quantityColor: 'primary02',
      textColor: 'gray07',
      expired: false,
    };
  } else {
    return {
      badgeType: 'active',
      quantityColor: 'primary01',
      textColor: 'black',
      expired: false,
    };
  }
}

export default useBadge;
