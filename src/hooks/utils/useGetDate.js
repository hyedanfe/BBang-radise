// 현재 날짜를 input 날짜값과 비교 가능 형식으로 만드는 함수

function useGetDate(date) {
  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : '0' + month;
  let day = date.getDate();
  day = day >= 10 ? day : '0' + day;

  return year + '-' + month + '-' + day;
}

export default useGetDate;
