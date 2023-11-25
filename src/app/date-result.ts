export class DateResult {
  dd: number = 0;
  mm: number = 0;
  yyyy: number = 0;
}

export let calculateAge = function (dateInput: Date) {
  console.log(dateInput);
  let objectTemp = new DateResult();
  const fecha = new Date();
  objectTemp.yyyy = fecha.getFullYear() - dateInput.getFullYear();
  objectTemp.mm = fecha.getMonth() - dateInput.getMonth() + objectTemp.yyyy * 12;
  objectTemp.mm = fecha.getMonth() - dateInput.getMonth() + objectTemp.yyyy * 12;
  
  let Difference_In_Time = new Date().getTime() - dateInput.getTime();
  
  objectTemp.dd = Difference_In_Time / (1000 * 3600 * 24);

  return objectTemp;
};
