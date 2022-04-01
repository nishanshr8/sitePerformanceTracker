const submitHandler = (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.target);
  console.log(formData);
}

export default submitHandler;

