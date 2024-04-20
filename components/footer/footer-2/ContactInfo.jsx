import { Translate } from "../../translate";
const ContactInfo = () => {
  const t = Translate().use;
  const contactContent = [
    {
      id: 1,
      title: `${t.touch}`,
      action: "tel:+(976) 99006299",
      text: "+(976) 99006299",
    },
    {
      id: 2,
      title: `${t.email}`,
      action: "arvaitour@gmail.com",
      text: "arvaitour@gmail.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-white mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
