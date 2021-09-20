// 숫자와 관련된 함수들입니다.

export const numberWithComma = (number: number | undefined) => {
  if (!number) return 'error';
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(regexp, ',');
};
