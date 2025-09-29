const boutonValidate = document.querySelector(".btn");

function dateFormat(date, format) {
  let dateFormat;

  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  switch (format) {
    case "yyyy-mm-dd":
      dateFormat = `${year}-${month}-${day}`;
      break;

    case "dd/mm/yyyy":
      dateFormat = `${day}/${month}/${year}`;
      break;

    default:
      break;
  }

  return dateFormat;
}

let today = new Date();
let tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

start_date.min = dateFormat(today, "yyyy-mm-dd");
start_date.value = dateFormat(today, "yyyy-mm-dd");

end_date.min = dateFormat(tomorrow, "yyyy-mm-dd");
end_date.value = dateFormat(tomorrow, "yyyy-mm-dd");

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = dateFormat(day, "yyyy-mm-dd");
  }
  end_date.min = dateFormat(day, "yyyy-mm-dd");
});

function bookingCalc() {
  let dateDiff = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
}

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
