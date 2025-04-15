import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { count: 25, suffix: '+', label: "Projects Completed", color: "text-blue-600" },
  { count: 10, suffix: '+', label: "Happy Clients", color: "text-green-600" },
  { count: 2, suffix: '+', label: "Years Experience", color: "text-purple-600" },
  { count: 15, suffix: '+', label: "Technologies Used", color: "text-yellow-600" },
];

const StatsSection = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Stats & Highlights
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-4xl font-bold ${stat.color}`}>
                <CountUp end={stat.count} duration={2} />{stat.suffix}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
