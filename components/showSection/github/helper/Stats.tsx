import { motion } from "framer-motion";
const Stats = ({ itemVariants, stats, name }) => {
  const { logs, totalContribution, gitOpenDays } = stats;

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  const formatted = today.toLocaleDateString("en-US", options);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={itemVariants}>
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h3 className="font-semibold mb-4">{`${name}'s GitHub Stats`}</h3>
        <div className="space-y-3">
          {logs?.map((stat, index) => (
            <div className="flex justify-between" key={index}>
              <span className="text-gray-400">{stat?.label}</span>
              <span>{stat?.count?.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">{totalContribution}</div>
          <div className="text-gray-400 text-sm mb-4">Total Contributions</div>
          <div className="text-gray-500 text-xs">{gitOpenDays} - Present</div>

          <div className="mt-6 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-orange-500">1</span>
            </div>
          </div>
          <div className="text-orange-500 font-semibold mt-2">
            Current Streak
          </div>
          <div className="text-xs text-gray-500">{formatted}</div>

          <div className="mt-4 text-right">
            <div className="text-2xl font-bold">7</div>
            <div className="text-gray-400 text-sm">Longest Streak</div>
            <div className="text-xs text-gray-500">
              Dec 11, 2021 - Dec 17, 2021
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
