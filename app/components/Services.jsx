import { assets, serviceData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      
      {/* Wrapping all headings and paragraph in a motion.div */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% of element is visible
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h4 
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          What I  Offer
        </motion.h4>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-5xl font-Ovo"
        >
          My Services
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Detail-oriented and analytical Data Analyst with hands-on experience in Power BI, Excel, SQL, MS SQL, and
          MySQL. Skilled in analyzing structured and unstructured datasets, performing ETL processes, and developing interactive dashboards that translate complex data into actionable business insights. Possesses proven
          expertise in data warehousing, data visualization.
        </motion.p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        className="grid gap-6 my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link}>
              Read more <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
