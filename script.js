 // Sample booked dates (for highlighting)
 const bookedDates = ["2025-04-18", "2025-04-20", "2025-04-25"];

 // Initialize Flatpickr
 const flatpickrInstance = flatpickr("#event-date", {
   minDate: "today",
   dateFormat: "Y-m-d",
   onDayCreate: function(dObj, dStr, fp, dayElem) {
     const date = dayElem.dateObj.toISOString().split("T")[0];
     if (bookedDates.includes(date)) {
       dayElem.classList.add("booked-date");
       dayElem.setAttribute("title", "Date already booked");
     } else {
       dayElem.classList.add("available-date");
       dayElem.setAttribute("title", "Available for booking");
     }
   }
 });


document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add("border-red-500");
        valid = false;
      } else {
        input.classList.remove("border-red-500");
      }
    });

    if (valid) {
      form.reset();
      flatpickrInstance.clear();

      document.getElementById("confirmation").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("confirmation").classList.add("hidden");
      }, 3000);
    }
  });