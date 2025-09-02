import React from "react";
import Marquee from "react-fast-marquee";

export default function ClientSays() {
  const clients = [
    {
      quote: "We were very impressed at how rapidly their team learned the dynamics of our industry and market. 📈",
      name: "Lauren Hill, Director of Growth & Strategy",
      company: "Alessia",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b3f0b642d25237be56_Logo%20testimonials.svg",
      color: "",
    },
    {
      quote: "🤘🏽 We were in constant touch with our Design Lead, and he was really a part of our team.",
      name: "Hantz Févry, Co-Founder & CEO",
      company: "Stoovo",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b39afd6696c09a737f_Logo%20testimonials-1.svg",
      color: "is-cyan",
    },
    {
      quote: "I was impressed by their flexibility and willingness to adapt to our schedule even though it wasn't always convenient. 🗓",
      name: "Rachel Rosenson, Product Designer",
      company: "Nexar",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b36588b7491593bd2c_Logo%20testimonials-2.svg",
      color: "is-gray",
    },
    {
      quote: "We have navigated the partnership successfully to date. 🤝 🤝",
      name: "Ben Lang, Founder & CEO",
      company: "Native",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b34f521e8b9bd43210_Logo%20testimonials-3.svg",
      color: "",
    },
    {
      quote: "UX design isn't easy to get right but with them, we can move fast without compromising quality.",
      name: "Sophie Lezama, Director of Growth",
      company: "Spren (Elite HRV)",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b372024ebf3d1c59b3_Logo%20testimonials-4.svg",
      color: "is-red",
    },
    {
      quote: "🤩 🤩 Their high level of quality work and professionalism was impressive.",
      name: "Nurit Gazit, VP Product",
      company: "Marcel",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b35046b0720ca60026_Logo%20testimonials-5.svg",
      color: "is-orange",
    },
    {
      quote: "🥳 Great job guys, wonderful presentations and work.",
      name: "Wade Murray",
      company: "Lima",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b301c4f69930dfc0f7_Logo%20testimonials-6.svg",
      color: "is-purple",
    },
    {
      quote: "The app looks great! Thank you very much for all your hard work and your patience!! 😍 😍",
      name: "Sergio Sanchez",
      company: "Ultralytics",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b3c7bb094e26121a2b_Logo%20testimonials-7.svg",
      color: "is-blue",
    },
    {
      quote: "They’ve delivered on tight timelines even with confusing objectives, providing extremely high-quality work. 🫡 🫡 🫡",
      name: "Lead Product Manager",
      company: "Piñata",
      logo: "https://cdn.prod.website-files.com/678e5f1a1f6220b154b30471/679363b393ec770a257ca309_Logo%20testimonials-8.svg",
      color: "is-indigo",
    },
  ];

  return (
    <section className="section slider-section">
      <div className="container">
        <div className="body-medium is-heading">Media & News</div>
      </div>

      <Marquee gradient={false} speed={100} pauseOnHover={true} direction="left">
        <div className="clients-wrapper">
          {clients.concat(clients).map((client, index) => (
            <div className="clients-card" key={index}>
              <div className={`clients-quote ${client.color}`}>{client.quote}</div>
              <div className="clients-author-wrapper">
                <img src={client.logo} alt="" className="clients-logo" style={{width:"14rem"}} loading="lazy" />
                <div className="clients-author-name">
                  <div>{client.name}</div>
                  <div className="clients-company">{client.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
