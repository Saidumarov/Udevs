import { services } from "../../db";

const Services = () => {
  return (
    <section className="w-full h-full bg-white" id="services">
      <div className="container py-20 max-[900px]:pt-6 ">
        <div className="reveal">
          <h1 className="max-w-[800px] text-[64px]  max-[900px]:text-[32px] max-[900px]:text-center leading-[64px] font-[600] text-[#1b5bf7]">
            Our services
          </h1>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap pt-20 ">
          {services.map((service, i) => (
            <div key={i} className="card reveal">
              <div className=" p-8 h-[209px] max-[900px]:h-[180px] max-[450px]:h-[220px] mb-6 rounded-lg bg-[#f4f7ff]">
                <img
                  className="w-[35px] h-[35] mb-6"
                  src={service.img}
                  alt={service.title}
                />
                <h3 className="text-[20px] max-[900px]:text-[16px] font-medium text-[#18191f] leading-[30px] max-[450px]:leading-6 mb-10">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
