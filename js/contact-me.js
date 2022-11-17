function sendMail() {
  var params = {
    name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#comment").value,
  };
  const serviceID = "service_mgypll7";
  const templateID = "template_fo7v7ja";
  emailjs.send(serviceID, templateID, params).then((res) => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#comment").value = "";
    alert("Message Sent Successfully!!!");
  });
}