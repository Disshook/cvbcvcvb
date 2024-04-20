const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Холбогдох",
      action: "tel:+(976) 9900 6299",
      text: "+(976) 9900 6299",
    },
    {
      id: 2,
      title: "Холбогдох",
      action: "mailto:arvaitour@gmail.com",
      text: "arvaitour@gmail.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
