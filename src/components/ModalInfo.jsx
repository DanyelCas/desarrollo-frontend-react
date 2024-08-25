import { motion } from 'framer-motion'

const ModalInfo = ({ visible, message, onClose, onConfirm  }) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p dangerouslySetInnerHTML={{ __html: message }}></p>
                    {onConfirm && (
                        <button className="confirm-btn" onClick={onConfirm}>
                            Presionar para salir!!!
                        </button>
                    )}
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;