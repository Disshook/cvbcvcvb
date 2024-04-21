import { Translate } from "../translate";

const ContactInfo = () => {
  const t = Translate().use;
  const contactContent = [
    {
      id: 1,
      title: `${t.touch}`,
      action: "tel:+(976)95954827, 70153399",
      text: "+(976) 95954827, 70153399",
    },
    {
      id: 2,
      title: `${t.email}`,
      action: "EMTEXTENSIVEMON@GMAIL.COM",
      text: "EMTEXTENSIVEMON@GMAIL.COM",
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
