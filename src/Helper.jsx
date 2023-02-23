/*export*/ const current_date = new Date();
/*export*/ const current_year = current_date.getFullYear();

export function GetCurrentDate() {
  return (
    current_date.getDate() +
    '-' +
    (current_date.getMonth() + 1) +
    '-' +
    current_year
  );
};

export function GetCurrentYear() {
  return current_year;
};

export default GetCurrentYear();
