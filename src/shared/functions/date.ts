// 날짜와 관련된 함수들입니다.

interface DateToYYMMDDInterface{
    date: Date | undefined;
    separator: string;
  }

// date 객체를 yymmdd 포맷으로 변경
// separator를 통해 원하는 형식으로 변경 가능 
export const dateToYYMMDD = ({
  date,
  separator = '',
}: DateToYYMMDDInterface) => {
  if (!date) return 'error';

  let year = date.getFullYear().toString().slice(2, 4);
  let month: number | string = date.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`;
  let day: number | string = date.getDate();
  day = day >= 10 ? day : `0${day}`;

  return `${year}${separator}${month}${separator}${day}`;
};
