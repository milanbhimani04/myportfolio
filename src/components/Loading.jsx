import { motion } from 'framer-motion';

export default function Loading() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    const dotVariants = {
        hidden: { y: 0 },
        visible: {
            y: [-10, 0, -10],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="text-center">
                {/* Logo */}
                <motion.div className="mb-8" variants={logoVariants}>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mx-auto">
                        MB
                    </div>
                </motion.div>

                {/* Loading Text */}
                <motion.h2
                    className="text-xl font-semibold text-secondary-900 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Loading...
                </motion.h2>

                {/* Loading Dots */}
                <div className="flex justify-center space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 bg-primary-600 rounded-full"
                            variants={dotVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.2 }}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <motion.div
                    className="w-64 h-1 bg-secondary-200 rounded-full mt-8 mx-auto overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                            delay: 0.7,
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
